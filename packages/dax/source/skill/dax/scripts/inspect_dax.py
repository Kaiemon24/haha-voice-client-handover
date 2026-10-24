from pathlib import Path
import argparse,json,hashlib,sys
p=argparse.ArgumentParser();p.add_argument('--brand-root',type=Path);a=p.parse_args();root=(a.brand_root or Path(__file__).resolve().parents[1]/'assets/design-system').resolve();m=json.loads((root/'asset-manifest.json').read_text('utf8'));errors=[]
for x in m['files']:
 f=(root/x['path']).resolve()
 if not f.is_relative_to(root) or not f.is_file() or hashlib.sha256(f.read_bytes()).hexdigest()!=x['sha256']:errors.append(x['path'])
print(json.dumps({'status':'PASS' if not errors else 'FAIL','brand':m['brand'],'version':m['version'],'files':len(m['files']),'entry':m['entry'],'rules':m['rules'],'voice':m['voice'],'pdfRoot':m['pdfRoot'],'errors':errors,'scope':'File closure only; visual, native discovery, actual tasks and client signoff separate.'},ensure_ascii=False));sys.exit(bool(errors))
