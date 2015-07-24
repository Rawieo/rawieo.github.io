from os import system

coffee_sources = ['master']
scss_sources = ['master']

if __name__ == '__main__':
    for coffee_source in coffee_sources:
        system('coffee -o js/ -c coffee/{filename}.coffee'.format(filename=coffee_source))
    for scss_source in scss_sources:
        system('sass --scss scss/{filename}.scss css/{filename}.css'.format(filename=scss_source))
