// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/frontend/less/**/*.less',
            tasks: ['less']
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
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['node_modules/jquery/dist/jquery.js', 'node_modules/owl-carousel-2/owl.carousel.js', 'node_modules/isotope-layout/dist/isotope.pkgd.js'],
                dest: 'app/frontend/js/libs.js'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};