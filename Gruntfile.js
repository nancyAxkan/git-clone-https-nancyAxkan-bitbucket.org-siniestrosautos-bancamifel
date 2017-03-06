

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngtemplates: {
            mifel: {
                src: "app/**/*.html",
                dest: "app/templates.js"
            }
        },
        mini: {
            
        },
        watch: {
            templates: {
                files: ['app/**/*.html'],
                tasks: ['ngtemplates'],
                options: {
                    event: ['all']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "dist/app/mifel.min.css": ["app/**/*.css", "common/rzslider.min.css"]
                } 
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }  
            },
            produccion: {
                files: {
                    'dist/app/app.mifel.min.js': [
                        'app/app.js', 
                        'app/app.exception.js',
                        'app/app.routes.js', 
                        'app/app.authObject.js', 
                        'app/app.comunFact.js', 
                        'app/app.shared.js', 
                        'app/app.onlineoffline.js',
                        'app/app.directives.js', 
                        'app/templates.js',
                        'app/**/*.js'
                    ],
                    'dist/app/comun.min.js': [
                        'common/angularfire.min.js',
                        'common/angular-material.min.js',
                        'common/angular-material-icons.min.js',
                        'common/angular-ui-router.min.js',
                        'common/jinqjs.js',
                        'common/rzslider.min.js',
                        'common/json.pruned.js',
                        'common/angular-idle.min.js'
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: "login_google.html", dest: "dist" },
                    {expand: true, src: "manifest.appcache", dest: "dist" },
                    {expand: true, src: "manifest.json", dest: "dist" },
                    {expand: true, src: "assets/*", dest: "dist" },
                ]
            }
        },
        includeSource: {
            produccion: {
                files: { "dist/index.html": "index.html" }
            }
        },
        "string-replace": {
            inline: {
                files: {
                    "dist/index.html": "dist/index.html"
                },
                options: {
                    replacements: [
                        {
                            pattern: /<!-- \/include -->/ig,
                            replacement: ""
                        },
                        {
                            pattern: /<!-- include: "type": "css", "basePath": "dist", "files": "app\/\*.css" -->/ig,
                            replacement: ""
                        },
                        {
                            pattern: /<!-- include: "type": "js", "basePath": "dist", "files": "app\/comun.min.js" -->/ig,
                            replacement: ""
                        },
                        {
                            pattern: /<!-- include: "type": "js", "basePath": "dist", "files": "app\/app.mifel.min.js" -->/ig,
                            replacement: ""
                        },
                        {
                            pattern: /<link href="app\/mifel.min.css" rel="stylesheet" type="text\/css">/ig,
                            replacement: "<link href=\"app/mifel.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"none\" onload=\"if(media!='all')media='all'\">"
                        },
                        {
                            pattern: /<script src="app\/comun.min.js">/ig,
                            replacement: "<script src=\"app/comun.min.js\" defer>"
                        },
                        {
                            pattern: /<script src="app\/app.mifel.min.js">/ig,
                            replacement: "<script src=\"app/app.mifel.min.js\" defer>"
                        }
                    ]
                }
            }
        },
        jshint: {
            options: {
                "asi": true,
                "curly": true,
                "eqnull": true,
                "eqeqeq": false,
                "undef": true,
                "strict": true,
                "multistr": true,
                "globals": {
                    "angular": true,
                    "firebase": true,
                    "document": true,
                    "ga": true,
                    "jinqJs": true,
                    "console": true,
                    "window": true,
                    "Promise": true,
                    "navigator": true,
                    "Blob": true
                },
                "-W032": true,
                "-W040": true,
                "-W041": true,
                "-W082": true
            },
            all: ['app/**/*.js', '!app/app.mifel.min.js', '!app/comun.min.js', '!app/templates.js']
        }
    });

    //grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-string-replace');

    //...
    //Include sources, run the server, open the browser, and watch.
    //If you intend to copy this, make sure to remove 'server' and 'open', or add those tasks.
    grunt.registerTask('default', ['ngtemplates', 'uglify']);
    grunt.registerTask("produccion", ["ngtemplates", "cssmin", "uglify", "copy", "includeSource", "string-replace"]);
};