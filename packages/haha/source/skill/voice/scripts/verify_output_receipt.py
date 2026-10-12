"""Hash/coverage proof for a caller-supplied final reader layer, not semantic QA."""
from pathlib import Path
import argparse
import hashlib
import json


def digest(data):
    return 'sha256:' + hashlib.sha256(data).hexdigest()


def require(ok, message):
    if not ok:
        raise ValueError(message)


def read_ref(ref, root):
    require(isinstance(ref, dict) and isinstance(ref.get('path'), str), 'file reference missing')
    supplied = Path(ref['path'])
    p = supplied if supplied.is_absolute() else root / supplied
    for a in (p, *p.parents):
        require(not a.is_symlink() and not (hasattr(a, 'is_junction') and a.is_junction()), 'reparse reference')
    raw = p.read_bytes()
    require(digest(raw) == ref.get('sha256'), 'stale or mismatched reference: ' + str(p))
    require(raw.strip(), 'empty evidence: ' + str(p))
    return raw


def plan(has_reader_copy, languages, phase, audio_only=False):
    require(phase in ('before-draft', 'final-merge', 'before-handoff'), 'unknown phase')
    require(isinstance(has_reader_copy, bool) and isinstance(audio_only, bool), 'invalid routing facts')
    require(isinstance(languages, list) and all(isinstance(x, str) for x in languages), 'invalid languages')
    if not has_reader_copy or audio_only:
        return {'owner': None, 'reason': 'no applicable reader-copy support'}
    lanes = sorted({x.split('-')[0].lower() for x in languages} & {'en', 'vi'})
    return {'owner': 'voice' if lanes else None, 'role': 'required-support' if lanes else None,
            'functions': lanes, 'phase': phase, 'formatOwnerUnchanged': True,
            'extraLocales': sorted({x for x in languages if x.split('-')[0].lower() not in ('en', 'vi')})}


def verify(receipt, root):
    require(receipt.get('schemaVersion') == 'voice-output-review/v1', 'wrong schema')
    require(receipt.get('phase') == 'final-merge', 'not final merged copy')
    require(receipt.get('voiceOwner') == 'voice' and receipt.get('owner'), 'owner missing')
    rules = receipt.get('rules')
    require(isinstance(rules, list) and bool(rules), 'actual rules missing')
    for r in rules:
        read_ref(r, root)
    read_ref(receipt.get('source'), root)
    read_ref(receipt.get('artifact'), root)
    copy = json.loads(read_ref(receipt.get('copy'), root))
    coverage = json.loads(read_ref(receipt.get('coverage'), root))
    units = copy.get('units')
    require(isinstance(units, list) and units, 'reader units missing')
    ids, observed_states = set(), set()
    for u in units:
        require(isinstance(u.get('id'), str) and u['id'] and u['id'] not in ids, 'duplicate/missing reader unit')
        require(u.get('language') in ('en', 'vi'), 'unsupported unit language')
        require(isinstance(u.get('text'), str) and u['text'].strip(), 'empty unit')
        require(isinstance(u.get('state'), str) and u['state'], 'state missing')
        ids.add(u['id']); observed_states.add(u['state'])
    states = receipt.get('states')
    require(isinstance(states, list) and len(set(states)) == len(states) and set(states) == observed_states,
            'incomplete or duplicate state coverage')
    require(coverage.get('units') == units, 'consumer readback differs from reviewed reader layer')
    reviews = receipt.get('reviews')
    require(isinstance(reviews, list) and len(reviews) == len(units), 'review coverage missing')
    reviewed = set()
    by_id = {u['id']: u for u in units}
    for r in reviews:
        uid = r.get('unitId')
        require(uid in ids and uid not in reviewed, 'duplicate/unknown review')
        require(r.get('verdict') == 'PASS' and isinstance(r.get('reviewer'), str) and r['reviewer'].strip(), 'review not passed')
        require(r.get('textSha256') == digest(by_id[uid]['text'].encode('utf-8')), 'review text changed')
        read_ref(r.get('evidence'), root)
        reviewed.add(uid)
    require(receipt.get('openBlockers') == [], 'open or unspecified blockers')
    require(isinstance(receipt.get('requiresRender'), bool), 'render applicability missing')
    if receipt['requiresRender']:
        rendered = receipt.get('renderEvidence')
        require(isinstance(rendered, list) and len(rendered) == len(states), 'render state coverage missing')
        require({r.get('state') for r in rendered} == set(states), 'render states differ')
        for r in rendered:
            read_ref(r.get('evidence'), root)
    return {'status': 'PASS', 'units': len(units), 'states': len(states),
            'scope': 'supplied file identity and coverage only; semantic truth/render authenticity not certified'}


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('receipt', type=Path)
    args = p.parse_args()
    try:
        result = verify(json.loads(args.receipt.read_text(encoding='utf-8')), args.receipt.resolve().parent)
    except (ValueError, TypeError, KeyError, OSError) as e:
        print(json.dumps({'status': 'BLOCKED', 'error': str(e)}, ensure_ascii=True)); return 1
    print(json.dumps(result)); return 0


if __name__ == '__main__':
    raise SystemExit(main())
