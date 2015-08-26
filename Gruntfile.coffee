module.exports = (grunt) ->
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-sass'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.registerTask 'default', ['watch']
    grunt.initConfig
        coffee:
            compile:
                files:
                    'js/master.js': 'coffee/master.coffee'
        sass:
            dist:
                files:
                    'css/master.css': 'scss/master.scss'
        watch:
            sass:
                files: 'scss/*.scss'
                tasks: 'sass'
                options:
                    spawn: false
            coffee:
                files: 'coffee/*.coffee'
                tasks: 'coffee'
                options:
                    spawn: false