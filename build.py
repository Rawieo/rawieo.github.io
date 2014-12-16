from os import system

ts_sources = ['ts_src/site.ts',
              'ts_src/handlers.ts']

ts_out = 'js/site.js'

if __name__ == '__main__':
    system('tsc {} --out {}'.format(' '.join(ts_sources), ts_out))