define(['jquery','underscore','backbone', 'app/config'],function($, _, Backbone, config) {

	
	var AppView = Backbone.View.extend({
		initialize: function() {
			
			_.bindAll(this, 'render', 'onWindowResize');
			
		    var userAgent = navigator.userAgent.toLowerCase();
			config.set({
				isIphone: (userAgent.indexOf('iphone') != -1) ? true : false,
				isIpad: (userAgent.indexOf('ipad') != -1) ? true : false,
				isTouch: Modernizr.touch,
				clickEvent: ( Modernizr.touch ? 'touchstart' : 'click' ),
				has3d: ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())
			});
			
			
			// call this.onWindowResize() once
			this.onWindowResize();
		
			// set up on Window Resize callback
			$(window).resize(this.onWindowResize);
			
			
			
			
		},
		render: function() {
			
			this.$el.html( config.get('windowHeight') + 'x' + config.get('windowWidth') );
			
			return this;
		},
		onWindowResize: function() {
			
			config.set({
				windowHeight: $(window).height(),
				windowWidth: $(window).width()
			});
			
			this.render();
			
			
		}
	});
	
	
	return AppView;
	
	
});