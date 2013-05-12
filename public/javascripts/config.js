seajs.config({
    // Enable plugins
    plugins: ['shim'],

    // Configure alias
    alias: {
        // For

  	    // jQuery & jQuery-UI
        'jquery': {
      	    src: 'lib/jquery-2.0.0.min.js',
      	    exports: 'jQuery'
        },
        'jqueryui': {
	        src: 'lib/jquery-ui.min.js'
        },
    
        // Backbone.js & Underscore.js & Jade.js
        'underscore': {
	        src: 'lib/underscore-min.js',
            exports: '_'
        },
        'backbone': {
		    src: 'lib/backbone-min.js',
		    deps: ['underscore', 'jquery'],
		    exports: 'Backbone'
	    },
    	'jade': {
    		src: 'lib/jade.min.js',
	    	exports: 'jade'
	    },
	
    	// Scripts for Flat-UI
    	'flat-dropkick': {
    		src: 'lib/jquery.dropkick-1.0.0.js'
    	},
	    'flat-checkbox-radio': {
	    	src: 'lib/custom_checkbox_and_radio.js'
	    },
	    'flat-radio': {
	    	src: 'lib/custom_radio.js'
	    },
	    'flat-tagsinput': {
	    	src: 'lib/jquery.tagsinput.js'
	    },
	    'flat-bootstrap-tooltip': {
	    	src: 'lib/bootstrap-tooltip.js'
	    },
	    'flat-placeholder': {
	    	src: 'lib/jquery.placeholder.js'
	    },
	    'flat-application': {
	    	src: 'lib/application.js'
	    }

	
  }
});