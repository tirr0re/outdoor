// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/frontend/less/**/*.less',
            tasks: ['less:dev']
        },
        less: {
            dev: {
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 5 versions"]})
                    ],
                    cleancss: true,
                    sourceMap: true,
                    sourceMapFilename: 'app/frontend/css/style.css.map',
                    sourceMapURL: 'style.css.map',
                    sourceMapRootpath: '/'
                },
                files: {
                    'app/frontend/css/style.css': 'app/frontend/less/style.less'
                }
            },
            prod: {
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 5 versions"]})
                    ],
                    compress: true,
                    cleancss: true
                },
                files: {
                    'public/css/style.min.css': 'app/frontend/less/style.less'
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['node_modules/jquery/dist/jquery.js', 'node_modules/owl.carousel/dist/owl.carousel.js', 'node_modules/isotope-layout/dist/isotope.pkgd.js'],
                dest: 'app/frontend/js/libs.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/js/main.min.js': ['app/frontend/js/libs.js', 'app/frontend/js/scripts.js']
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['app/frontend/images/**'],
                    dest: 'public/images/',
                    filter: 'isFile',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'app/frontend/fonts/',
                    src: '**',
                    dest: 'public/fonts/',
                    filter: 'isFile'
                }]
            }
        },
        targethtml: {
          dist: {
              files: {
                  'public/index.html': 'app/frontend/index.html'
              }
          }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/frontend/css/*.css',
                        'app/frontend/*.html',
                        'app/frontend/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app/frontend/'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', ['copy', 'less:prod', 'uglify', 'targethtml']);
};