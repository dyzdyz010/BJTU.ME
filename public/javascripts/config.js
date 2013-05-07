seajs.config({
    // Enable plugins
    plugins: ['shim'],

    // Configure alias
    alias: {
        // For

  	    // jQuery & jQuery-UI
        'jquery': {
      	    src: 'jquery-2.0.0.min.js',
      	    exports: 'jQuery'
        },
        'jqueryui': {
	        src: 'jquery-ui.min.js'
        },
    
        // Backbone.js & Underscore.js & Jade.js
        'underscore': {
	        src: 'underscore-min.js',
            exports: '_'
        },
        'backbone': {
		    src: 'backbone-min.js',
		    deps: ['underscore', 'jquery'],
		    exports: 'Backbone'
	    },
    	'jade': {
    		src: 'jade.min.js',
	    	exports: 'jade'
	    },
	
    	// Scripts for Flat-UI
    	'flat-dropkick': {
    		src: 'jquery.dropkick-1.0.0.js'
    	},
	    'flat-checkbox-radio': {
	    	src: 'custom_checkbox_and_radio.js'
	    },
	    'flat-radio': {
	    	src: 'custom_radio.js'
	    },
	    'flat-tagsinput': {
	    	src: 'jquery.tagsinput.js'
	    },
	    'flat-bootstrap-tooltip': {
	    	src: 'bootstrap-tooltip.js'
	    },
	    'flat-placeholder': {
	    	src: 'jquery.placeholder.js'
	    },
	    'flat-application': {
	    	src: 'application.js'
	    }

	
  }
});