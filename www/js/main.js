requirejs.config({
	urlArgs: "nocache=1",
	baseUrl: '/js',
	paths: {
		app: 'app',
		jquery: 'libs/jquery/jquery-1.8.0.min',
		jq: 'libs/jquery',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min',
		text: 'libs/require/text',
		templates: 'templates'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		}
	}
});



require(['jquery','underscore','backbone', 'app/config', 'app/app'], function($, _, Backbone, config, AppView) {
	
	$(function() {
		
		new AppView({el:$('body')});
		
	});
	
});