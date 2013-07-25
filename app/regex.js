if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
			return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
			return /([a-zA-Z])(\1+)/.test(str);
    },

    endsWithVowel : function(str) {
			return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
			if (/[0-9]{3}/.test(str)) {
				return str.match(/[0-9]{3}/)[0];
			}
			return false;
    },

    matchesPattern : function(str) {
			return /\b\d{3}\-\d{3}\-\d{4}\b/.test(str);
    },

    isUSD : function(str) {
			return /^\$[0-9]{1,3}(\,[0-9]{3})*(\.[0-9]{2})?$/.test(str);
		}
  };
});
