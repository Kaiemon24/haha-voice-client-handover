#!/usr/bin/env python3
"""Preview-first atomic additive install of the selected current brand package set."""
from pathlib import Path
import argparse,json,hashlib,runpy,sys,os
BRANDS=('haha','melab','dax','long-thanh')
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def plans(root,target,selected):
 rows=[];seen=set();manifests={}
 for brand in selected:
  pkg=root/'packages'/brand;helper=runpy.run_path(str(pkg/'installer/install_client_package.py'));m=json.loads((pkg/'manifest.json').read_text('utf8'));manifests[brand]=sha(pkg/'manifest.json')
  for row in helper['plan_actions'](pkg,target,m,'codex'):
   if row['target'].casefold() in seen:raise ValueError('Duplicate selected target')
   seen.add(row['target'].casefold());rows.append(dict(row,package=brand))
 return {'schema':'design-system-install-preview/v1','targetRoot':str(target),'brands':selected,'packageManifests':manifests,'files':rows,'conflicts':sum(x['status']=='CONFLICT' for x in rows)}
def main(argv=None):
 p=argparse.ArgumentParser();p.add_argument('--target-root',required=True);p.add_argument('--brands',default='all');p.add_argument('--preview',action='store_true');p.add_argument('--apply',action='store_true');p.add_argument('--confirm',action='store_true');a=p.parse_args(argv)
 if a.preview and a.apply:raise ValueError('Choose preview or apply')
 root=Path(__file__).resolve().parents[1];target=Path(a.target_root).expanduser()
 if not target.is_absolute() or not target.is_dir() or target.resolve().is_relative_to(root):raise ValueError('Use an existing absolute selected workspace outside package')
 target=target.resolve();helper=runpy.run_path(str(root/'packages/haha/installer/install_client_package.py'));helper['no_links'](target)
 selected=list(BRANDS) if a.brands=='all' else a.brands.split(',')
 if not selected or len(set(selected))!=len(selected) or any(x not in BRANDS for x in selected):raise ValueError('Unknown or repeated brand selection')
 state=plans(root,target,selected);preview=root/'installer/install-preview.json'
 if not a.apply:
  preview.write_text(json.dumps(state,ensure_ascii=False,indent=2),'utf8');(root/'installer/install-preview.md').write_text('# Bản xem trước\n\nChưa thay tệp đích. Xem install-preview.json để kiểm đầy đủ đường dẫn và xung đột.\n','utf8');print(json.dumps({'preview':True,'files':len(state['files']),'conflicts':state['conflicts']}));return 1 if state['conflicts'] else 0
 if not a.confirm or not preview.is_file() or json.loads(preview.read_text('utf8'))!=state:raise ValueError('Exact current preview and host-approved apply required')
 if state['conflicts']:raise ValueError('Foreign files retained; explicit upgrade plan required')
 created=[]
 try:
  for row in state['files']:
   if row['status']!='CREATE':continue
   src=root/'packages'/row['package']/row['source'];dst=target/row['target'];helper['no_links'](dst);data=src.read_bytes()
   if hashlib.sha256(data).hexdigest()!=row['sha256']:raise ValueError('Source changed after preview')
   dst.parent.mkdir(parents=True,exist_ok=True);helper['no_links'](dst.parent)
   with dst.open('xb') as f:f.write(data)
   created.append(row)
   if sha(dst)!=row['sha256']:raise ValueError('Destination changed')
  for row in state['files']:
   if sha(target/row['target'])!=row['sha256']:raise ValueError('Final destination readback mismatch')
 except (OSError,ValueError):
  for row in reversed(created):
   dst=target/row['target'];helper['no_links'](dst)
   if dst.is_file() and sha(dst)==row['sha256']:dst.unlink()
  raise
 for brand in selected:
  for name in ['input','output','library/custom']:
   d=target/('HAHA-Voice-work' if brand=='haha' else brand.upper()+'-Design-work')/name;helper['no_links'](d);d.mkdir(parents=True,exist_ok=True)
 (root/'installer/install-receipt.json').write_text(json.dumps(state,ensure_ascii=False,indent=2),'utf8')
 print(json.dumps({'applied':True,'created':len(created),'unchanged':len(state['files'])-len(created),'destinationHashesVerified':True,'routesAndPermissions':'unchanged'}));return 0
if __name__=='__main__':
 try:sys.exit(main())
 except (OSError,ValueError,KeyError) as exc:print(json.dumps({'ok':False,'error':str(exc)}));sys.exit(2)
