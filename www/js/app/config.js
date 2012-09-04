define(['jquery','underscore','backbone'], function($, _, Backbone) {
	
	var config = Backbone.Model.extend({
		defaults: {
			
			debug: 1
			
		},
		initialize: function() {
			
		}
	});
	
	return new config();
	
});