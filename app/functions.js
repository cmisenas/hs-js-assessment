if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
			return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
			return fn.call(obj);
    },

    functionFunction : function(str) {
			return function(str2) {
				return str + ', ' + str2;
			}
    },

    makeClosures : function(arr, fn) {
			var closure = [];
			for (var i = 0; i < arr.length; i++) {
				closure[i] = (function(arg) {
					return function() {
						return fn(arg)
					};
				}(arr[i]));
			}
			return closure;
    },

    partial : function(fn, str1, str2) {
			return function(str3) {
				return fn(str1, str2, str3);
			}
    },

    useArguments : function() {
			var val = 0;
			for (var i = 0; i < arguments.length; i++) {
				val += arguments[i];
			}
			return val;
    },

    callIt : function(fn) {
			var args = [];
			for (var i = 1; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
			var args = [];
			for (var i = 1; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			return function() {
				for (var i = 0; i < arguments.length; i++) {
					args.push(arguments[i]);
				}
				return fn.apply(null, args);
			}
    },

    curryIt : function(fn) {
    	return function(a) {
				return function(b) {
					return function(c) {
						return fn(a, b, c);
					}
				}
			}
		}
  };
});
