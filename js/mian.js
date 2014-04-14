require.config({
    shim:{
        underscore:{
            exports:'_'
        },
        backbone:{
            deps:[
                'underscore',
                'jquery'
            ],
            exports:'Backbone'
        },
        JST:{
            deps:['underscore'],
            exports:'JST'
        }
    },
    paths: {
        jquery: "lib/jquery-1.10.2.js",
        underscore: "lib/underscore-min.js",
        backbone: "lib/backbone-min.js",
        JST:"templates"
    }
});

require([
    'backbone'
    //views-------------

],function() {
    $(document).ready(function(){
        window.scrollTo(0,1);
        Backbone.history.start();
    });
});
