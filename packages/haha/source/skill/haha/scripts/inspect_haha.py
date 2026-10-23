from pathlib import Path
import argparse,json,hashlib,sys
p=argparse.ArgumentParser();p.add_argument('--brand-root',type=Path);a=p.parse_args();root=(a.brand_root or Path(__file__).resolve().parents[1]/'assets/design-system/package').resolve();m=json.loads((root/'package-manifest-current.json').read_text('utf8'));errors=[]
for x in m['files']:
 f=(root/x['path']).resolve()
 if not f.is_relative_to(root)or not f.is_file()or hashlib.sha256(f.read_bytes()).hexdigest()!=x['sha256']:errors.append(x['path'])
pdfroot=root.parent/'documents';pdfs=json.loads((pdfroot/'manifest.json').read_text('utf8'))
for x in pdfs['documents']:
 f=pdfroot/x['file']
 if not f.is_file()or hashlib.sha256(f.read_bytes()).hexdigest()!=x['sha256']:errors.append('PDF:'+x['file'])
print(json.dumps({'status':'PASS'if not errors else'FAIL','brand':'HAHA','version':m['version'],'files':len(m['files']),'purposePDFs':len(pdfs['documents']),'errors':errors,'claim':'Declared files/PDF bytes only; recipient discovery, runtime and new visual outputs need their own proof.'}));sys.exit(bool(errors))
