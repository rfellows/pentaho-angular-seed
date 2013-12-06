({
  appDir: "./module-scripts/app/",
  optimize: "uglify",
  optimizeCss: "none",
  baseUrl: ".",
  dir: "../bin/scriptOutput",
  paths: {
    requireLib: '../package-res/resources/web/app/lib/common-ui/resources/web/require',
    'common-ui/jquery': '../lib/provided/common-ui/resources/web/jquery/jquery-1.9.1.min',
    'common-ui/angular': '../lib/provided/common-ui/resources/web/angular/angular',
    'common-ui/angular-resource': '../lib/provided/common-ui/resources/web/angular/angular-resource',
    'common-ui/angular-route': '../lib/provided/common-ui/resources/web/angular/angular-route',
    'common-ui/angular-ui-bootstrap': '../lib/provided/common-ui/resources/web/bootstrap/ui-bootstrap-tpls-0.6.0.min',

    'common-ui/PluginHandler': '../lib/provided/common-ui/resources/web/plugin-handler/pluginHandler',
    'common-ui/Plugin': '../lib/provided/common-ui/resources/web/plugin-handler/plugin',
    'common-ui/AngularPluginHandler': '../lib/provided/common-ui/resources/web/plugin-handler/angularPluginHandler',
    'common-ui/AngularPlugin': '../lib/provided/common-ui/resources/web/plugin-handler/angularPlugin',
    'common-ui/AnimatedAngularPluginHandler': '../lib/provided/common-ui/resources/web/plugin-handler/animatedAngularPluginHandler',
    'common-ui/AnimatedAngularPlugin': '../lib/provided/common-ui/resources/web/plugin-handler/animatedAngularPlugin',

    'common-ui/angular-animate': '../lib/provided/common-ui/resources/web/angular/angular-animate',
    'common-ui/ring': '../lib/provided/common-ui/resources/web/ring/ring',
    'underscore': '../lib/provided/common-ui/resources/web/underscore/underscore'
  },

  shim: {
    'common-ui/angular': { deps: ['common-ui/jquery'], exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'common-ui/angular-ui-bootstrap': { deps: ['common-ui/angular'] },

    'common-ui/jquery': { exports: '$' },
    'common-ui/PluginHandler': { deps: ['common-ui/jquery'] },
    'common-ui/angular-animate': { deps: ['common-ui/angular'] },
    'underscore': { exports: '_' },
    'common-ui/ring': { deps: ['underscore'], exports: 'ring' }

  },

  namespace: "pen",
  
  include: "requireLib",

  uglify: {
    toplevel: true,
    ascii_only: true,
    beautify: false,
    max_line_length: 1000,

    //How to pass uglifyjs defined symbols for AST symbol replacement,
    //see "defines" options for ast_mangle in the uglifys docs.
    defines: {
        DEBUG: ['name', 'false']
    },

    //Custom value supported by r.js but done differently
    //in uglifyjs directly:
    //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
    no_mangle: true
  },

  modules: [
    {
      name: "main",
      exclude: [
        "common-ui"
      ]
    },
    {
      name: "common-ui",
      include: [
        'common-ui/jquery', 
        'common-ui/angular', 
        'common-ui/angular-resource', 
        'common-ui/angular-route',
        'common-ui/angular-ui-bootstrap',
        'common-ui/PluginHandler',
        'common-ui/Plugin',
        'common-ui/AngularPluginHandler',
        'common-ui/AngularPlugin',
        'common-ui/AnimatedAngularPluginHandler',
        'common-ui/AnimatedAngularPlugin',
        'common-ui/angular-animate',
        'common-ui/ring',
        'underscore'

      ],
      exclude: [
        "main"
      ],
      create: true
    }
  ]
})
