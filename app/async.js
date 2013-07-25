if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
			var jxhr = $.Deferred();
			return jxhr.resolve(value);
		},

    manipulateRemoteData : function(url) {
			var data = [];
			var jxhr = $.Deferred();
			$.ajax(url).done(function(jsonObj) {
				for (var i = 0; i < jsonObj.people.length; i++) {
					data.push(jsonObj.people[i].name);
				}
				data.sort();
				jxhr.resolve(data);
			});
			return jxhr.done(function() {
				return this;
			});
		}
  };
});
