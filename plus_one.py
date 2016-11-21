# import shutil, glob

# def latest_file():
#   return glob.glob('meta-*.html')[-1]

# def get_version_data(original_path):
#   pure_path, extension = original_path.rsplit('.', 1)
#   _, version_string    = pure_path.rsplit('-', 1)
#   version_number       = int(version_string)
#   next_version         = version_number + 1

#   return locals().copy()

# def get_new_path(pure_path, next_version, extension, **kwargs):
#   return '%(pure_path)s-%(next_version)003d.%(extension)s' % locals()

# def make_new_contents(original_path, version_number, next_version, **kwargs):
#   with open(original_path, 'r') as src:
#     orig_contents = src.read()

#   new_contents = orig_contents.replace()

# def make_copy():
#    orig_path     = latest_file()
#    version_data  = get_version_data(orig_path)
#    new_file_path = get_new_path(**version_data)
