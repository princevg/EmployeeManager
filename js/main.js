/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular',
        "uiRouter": "../lib/angular/angular-ui-router",
        "jquery": "../lib/jquery/jquery-2.2.3.min",
        "ngAnimate":""
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        "jquery":{
            exports:'jquery'
        },
        "ngAnimate":{
            exports:'ngAnimate',
            deps: ['angular']
        },
        'uiRouter':{
            deps: ['angular']
        }
    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
