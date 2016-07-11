var notifier = require('node-notifier');
var argv = require('yargs').argv;

module.exports = (function () {
    var projectName = "googledartsummitsignup";

    var projectPath = "./";
    var bowerPath = projectPath + "vendor/bower/";
    var distPath = projectPath + "dist/";
    var srcPath = projectPath + "src/";

    var cleanPaths = [distPath];

    var debug = true;

    return {
        debug: (argv.debug !== undefined ? argv.debug.toLowerCase() == "true" : debug),

        errorHandler: function(taskName)
        {
            return function (e) {
                notifier.notify({
                    "title": taskName,
                    "message": "An error occured in the " + e.plugin + " plugin."
                });
                console.log(e.message);
                this.emit("end");
            };
        },

        bowerPath: bowerPath,
        cleanPaths: cleanPaths,
        distPath: distPath,

        loadTasks: [
            "browser-sync",
            "build",
            "copy",
            "icons",
            "images",
            "scripts",
            "styles",
            "templates",
            "watch"
        ],
        buildTasks: [
            "copy",
            "icons",
            "images",
            "scripts",
            "styles",
            "templates"
        ],

        // ------------- Scripts -------------
        scriptsDist: distPath + "scripts",

        // ------------- Icons ---------------
        iconsDist: distPath,
        spriteConfig: {
            shape : {
                // Set maximum dimensions
                dimension       : {
                    maxWidth    : 32,
                    maxHeight   : 32
                }
            },
            mode : {
                view : {
                    bust : false,
                    render : {
                        less : true
                    },
                    dest : 'icons',
                    sprite : 'icons-css.svg'
                },
                symbol : {
                    dest : 'icons',
                    sprite : 'icons.svg'
                }
            }
        },

        // ------------- Fonts -------------
        fontsDist: distPath + "fonts",

        // ------------- Styles -------------
        stylesDist: distPath + "css",

        // ----------- Templates ------------
        templatesDist: distPath,

        // ------------- Images -------------
        imagesDist: distPath + "images",
        imagesOptimizationLevel: 5,
        imagesProgressive: true,
        imagesInterlaced: true,

        // ------------- Watch -------------
        watchImages: [ srcPath + "images/**/*"],
        watchIcons: [ srcPath + "icons/*" ],
        watchScripts: [
            srcPath + "scripts/**/*.js",
            projectPath + "vendor/**/*.js"
        ],
        watchStyles: [
            srcPath + "less/**/*.less",
            projectPath + "vendor/**/*.less"
        ],
        watchTemplates: [
            srcPath + "templates/**/*.html"
        ],

        // ------------- Copy on build -------------
        buildCopy: [{
            from: srcPath + "fonts/**/*",
            to: distPath  + "fonts"
        },
        {
            from: srcPath + "favicon.ico",
            to: distPath
        }],

        // ------------- Bundles -------------
        bundles: [{
            name: "master",
            ignorePlugins: ["jscs"],
            scripts: [
                bowerPath + "jQuery/dist/jquery.min.js",
                bowerPath + "jquery.easing/js/jquery.easing.min.js",
                srcPath + "scripts/**/*.js"
            ],
            templates: [srcPath + "templates/**/*"],
            styles: [srcPath + "less/master.less"],
            images: [srcPath + "images/**/*.{jpg,png,gif,svg}"],
            icons: [srcPath + "icons/**/*.svg"]
        }]
    };
})();
