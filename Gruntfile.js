module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: ['js/app.js', 'js/router.js', 'js/routes/decks_route.js', 'js/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        emberTemplates: {
            compile: {
                options: {
                    templateName: function(sourceFile){
                        return sourceFile.replace('/templates\//', '');
                    }
                },
                files: {
                    'build/<%= pkg.name %>.templates.js': ['templates/**/*.hbs']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'emberTemplates']);
}                  
    
