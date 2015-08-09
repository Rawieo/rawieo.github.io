from os import system

scss_sources = ['master']

if __name__ == '__main__':
    for scss_source in scss_sources:
        system('sass --scss scss/{filename}.scss css/{filename}.css'.format(filename=scss_source))
