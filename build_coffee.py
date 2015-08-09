from os import system

coffee_sources = ['master']

if __name__ == '__main__':
    for coffee_source in coffee_sources:
        system('coffee -o js/ -c coffee/{filename}.coffee'.format(filename=coffee_source))
