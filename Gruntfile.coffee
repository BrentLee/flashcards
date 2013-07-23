module.exports = (grunt) ->
    grunt ->initConfig
    
        pkg: grunt.file.readJSON "package.json"
        
        concat:
            app:
                src: ["js/application.js", "js/router.js", "js/**/*.js"]
                dest: "build/<%= pkg.name %>.js"
        
        emberTemplates:
            compile:
                options:
                    templateName: (sourceFile) ->
                        sourceFile.replace /templates\//, ""
                files:
                    "build/<%= pkg.name %>.templates.js": ["app/templates/**/*.hbs"]
                    
    
    grunt.loadNpmTasks "grunt-ember-templates"
    
    grunt.registerTask "default", ["emberTemplates"]