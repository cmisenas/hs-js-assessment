if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
			var bin = this.convertToBinary(num);
			return Number(bin[bin.length - bit]);
    },

    base10: function(str) {
			return parseInt(str, 2);
    },

    convertToBinary: function(num) {
			var bin = num.toString(2);
			return bin.length < 8 ? new Array(8 - bin.length + 1).join(0) + bin : bin;
    },

    multiply: function(a, b) {
			var places = Math.max(a.toString().length - a.toString().lastIndexOf('.') - 1, b.toString().length - b.toString().lastIndexOf('.') - 1) * 10;
			return ((a * places) * (b * places))/(places * places);
    }
  };
});

