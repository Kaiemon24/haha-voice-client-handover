#!/usr/bin/env python3
"""Portable, preview-first installer. No network, router mutation or overwrite; rollback only own verified new files."""
import argparse, hashlib, json, os, stat, sys
from pathlib import Path, PurePosixPath

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def safe_relative(value):
    p = PurePosixPath(value)
    if p.is_absolute() or not p.parts or any(x in ('..', '.', '') or ':' in x or '\\' in x for x in p.parts):
        raise ValueError('Unsafe relative path: ' + value)
    return p

def no_links(path):
    for item in [path, *path.parents]:
        if item.exists() and (item.is_symlink() or getattr(item.lstat(), 'st_file_attributes', 0) & getattr(stat, 'FILE_ATTRIBUTE_REPARSE_POINT', 1024)):
            raise ValueError('Symlink/reparse target refused: ' + str(item))

def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--target-root', required=True)
    ap.add_argument('--skill-layout', choices=['codex','kai-os'], default='codex')
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument('--preview', action='store_true'); g.add_argument('--apply', action='store_true')
    ap.add_argument('--confirm', action='store_true'); args = ap.parse_args()
    package = Path(__file__).resolve().parents[1]
    manifest_path = package / 'manifest.json'; manifest = json.loads(manifest_path.read_text('utf-8'))
    target = Path(args.target_root).absolute(); no_links(target)
    if not target.is_dir(): raise ValueError('Target must be an existing directory chosen by the client.')
    target = target.resolve()
    plan = []
    native = args.skill_layout == 'codex'
    for item in manifest['installFiles']:
        routes = [('source/skill/haha/', '.agents/skills/haha/'), ('source/skill/voice/', '.agents/skills/voice/'), ('source/html-ui/HAHA/', 'Brand asset/HAHA/Design system/')]
        if manifest.get('packageTypes') == ['skill']: routes = [('source/skill/voice/', '.agents/skills/voice/')]
        if not any(item['source'].startswith(s) and item['target'] == d + item['source'][len(s):] for s, d in routes):
            raise ValueError('Undeclared installation route refused.')
        src = package.joinpath(*safe_relative(item['source']).parts)
        dest = item['target']
        if not native: dest = dest.replace('.agents/skills/haha/', '.codex/skills/Visual/haha/').replace('.agents/skills/voice/', '.codex/skills/Content/voice/')
        dst = target.joinpath(*safe_relative(dest).parts)
        no_links(src); no_links(dst)
        if not src.resolve().is_relative_to(package) or not dst.resolve().is_relative_to(target):
            raise ValueError('Path escaped package or target.')
        if not src.is_file() or sha(src) != item['sha256']: raise ValueError('Source hash mismatch: ' + item['source'])
        if dst.exists() and not dst.is_file(): status = 'CONFLICT'
        elif dst.exists(): status = 'UNCHANGED' if sha(dst) == item['sha256'] else 'CONFLICT'
        else: status = 'CREATE'
        plan.append(dict(item, target=dest, status=status))
    receipt = {'schema':'client-install-preview/v1','package':manifest['name'],'manifestSha256':sha(manifest_path), 'targetRoot':str(target),'skillLayout':args.skill_layout,'files':plan,'conflicts':sum(x['status']=='CONFLICT' for x in plan)}
    preview = package / 'installer/install-preview.json'
    if args.preview:
        preview.write_text(json.dumps(receipt, ensure_ascii=True, indent=2), 'utf-8')
        lines = ['# Install preview', '', 'Target: ' + str(target), '', 'No target files changed.', '', '| Action | Target |', '|---|---|']
        lines += ['| '+x['status']+' | '+x['target']+' |' for x in plan]
        lines += ['', 'Conflicts: '+str(receipt['conflicts']), '', 'Apply only after checking the target and confirming this exact preview.']
        (package/'installer/install-preview.md').write_text('\n'.join(lines)+'\n','utf-8')
        print(json.dumps({'preview':True,'targetChanged':False,'files':len(plan),'conflicts':receipt['conflicts']},ensure_ascii=True))
        return 1 if receipt['conflicts'] else 0
    if not args.confirm: raise ValueError('Apply requires --confirm after client reviews preview.')
    if not preview.exists() or json.loads(preview.read_text('utf-8')) != receipt:
        raise ValueError('Preview is missing or stale. Run --preview for this exact target and package.')
    if receipt['conflicts']: raise ValueError('Conflicts refused. Keep current files; choose another workspace or plan a versioned upgrade.')
    created = []
    try:
        for item in plan:
            if item['status'] != 'CREATE': continue
            src = package.joinpath(*safe_relative(item['source']).parts); dst = target.joinpath(*safe_relative(item['target']).parts)
            no_links(dst); dst.parent.mkdir(parents=True, exist_ok=True); no_links(dst.parent)
            data = src.read_bytes()
            if hashlib.sha256(data).hexdigest() != item['sha256']: raise ValueError('Source changed after preview.')
            with dst.open('xb') as f: f.write(data)
            created.append(item)
            if sha(dst) != item['sha256']: raise ValueError('Destination readback mismatch: '+item['target'])
    except (OSError, ValueError):
        for item in reversed(created):
            dst = target.joinpath(*safe_relative(item['target']).parts)
            if dst.is_file() and sha(dst) == item['sha256']:
                no_links(dst); dst.unlink()
        raise
    for item in plan:
        dst = target.joinpath(*safe_relative(item['target']).parts)
        if not dst.is_file() or sha(dst) != item['sha256']: raise ValueError('Final destination drift: '+item['target'])
    (package/'installer/install-receipt.json').write_text(json.dumps(receipt,ensure_ascii=True,indent=2),'utf-8')
    print(json.dumps({'applied':True,'created':len(created),'unchanged':len(plan)-len(created),'destinationHashesVerified':True},ensure_ascii=True))
    return 0

if __name__ == '__main__':
    try: sys.exit(main())
    except (OSError, ValueError, KeyError) as e:
        print(json.dumps({'ok':False,'error':str(e)},ensure_ascii=True)); sys.exit(2)
