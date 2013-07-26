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
                        return sourceFile.replace(/templates\//, '').replace('_', '/');
                    }
                },
                files: {
                    'build/<%= pkg.name %>.templates.js': ['templates/**/*.hbs']
                }
            }
        },
        
        watch: {
            default: {
                files: ["js/**/*.js", "templates/**/*.hbs", "css/*.css", "css/*.scss"],
                tasks: ["default"]
            }
        },

        sass:{
            default: {

                options: {
                    lineNumbers: true
                },
                files: {
                    "css/emberFlashcards.css": ["css/emberFlashcards.scss"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'emberTemplates', 'sass', 'watch']);
}                  
    
