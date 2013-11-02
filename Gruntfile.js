module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: ['src/app.js', 'src/router.js', 'src/models/*.js', 'src/routes/decks_route.js', 'src/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        emberTemplates: {
            compile: {
                options: {
                    templateName: function(sourceFile){
                        return sourceFile.replace(/src\/templates\//, '').replace('_', '/');
                    }
                },
                files: {
                    'build/<%= pkg.name %>.templates.js': ['src/templates/**/*.hbs']
                }
            }
        },
        
        watch: {
            default: {
                files: ["src/**/*.js", "src/templates/**/*.hbs", "css/*.scss"],
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
    
