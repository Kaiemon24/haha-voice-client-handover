from pathlib import Path
import argparse,json,hashlib,sys
p=argparse.ArgumentParser();p.add_argument('--brand-root',type=Path);a=p.parse_args()
root=a.brand_root
if root is None:
 for ancestor in Path(__file__).resolve().parents:
  candidate=ancestor/'Brand asset/HAHA/Design system'
  if (candidate/'package-manifest262.json').is_file():root=candidate;break
if root is None:raise SystemExit('HAHA data root missing; supply --brand-root or use verified installer.')
root=root.resolve();m=json.loads((root/'package-manifest262.json').read_text(encoding='utf8'));errors=[]
for x in m['files']:
 f=(root/x['path']).resolve()
 if not f.is_relative_to(root) or not f.is_file():errors.append(x['path']+': missing/escaped');continue
 if hashlib.sha256(f.read_bytes()).hexdigest()!=x['sha256']:errors.append(x['path']+': hash mismatch')
result={'status':'PASS'if not errors else'FAIL','brand':'HAHA','version':m['version'],'files':len(m['files'])+1,'errors':errors,'claim':'Identity and declared local closure only; task output requires actual visual/behavior review.'}
print(json.dumps(result,ensure_ascii=True));sys.exit(bool(errors))
