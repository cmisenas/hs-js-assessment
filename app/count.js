if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
			console.log(start);
			var counter = setInterval(function() {
				if (start < end) {
					start++;
					console.log(start);
				}
			}, 100);
			return {
				cancel: function() {
					clearInterval(counter);
				}
			}
    }
  };
});
