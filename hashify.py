import hashlib, shutil, sys

def new_name(file_path, suffix):
  orig_path, file_type = file_path.rsplit('.', 1)
  return '%(orig_path)s_%(suffix)s.%(file_type)s' % locals()

def fingerprint(binary_data):
  hashed = hashlib.md5(binary_data)
  return hashed.hexdigest()

def main(file_path):
  with open(file_path, 'rb') as src:
    suffix = fingerprint(src.read())

  new_path = new_name(file_path, suffix)
  shutil.move(file_path, new_path)
  print(new_path)

if __name__ == '__main__':
  src_path = sys.argv[1]
  main(src_path)