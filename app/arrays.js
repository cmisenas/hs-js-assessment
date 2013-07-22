if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === item) {
					return i;
				}
			}
			return -1;
    },

    sum : function(arr) {
			var result = 0;
			for (var i = 0; i < arr.length; i++) {
				if (/^\s*function Array/.test(String(arr[i].constructor))) {
					result += this.sum(arr[i]);
				} else {
					result += arr[i];
				}
			}
			return result;
    },

    remove : function(arr, item) {
			var arrCopy = arr.slice(0);
			for (var i = 0; i < arrCopy.length; i++) {
				if (arrCopy[i] === item) {
					arrCopy.splice(i, 1);
				}
			}
			return arrCopy;
    },

    removeWithoutCopy : function(arr, item) {
			for (var i = arr.length - 1; i >= 0; i--) {
				if (arr[i] === item) {
					arr.splice(i, 1);
				}
			}
			return arr;
    },

    append : function(arr, item) {
			var arrCopy = arr.slice(0);
			arrCopy[arrCopy.length] = item;
			return arrCopy;
    },

    truncate : function(arr) {
			var arrCopy = arr.slice(0);
			arrCopy.splice(arrCopy.length - 1, 1);
			return arrCopy;
    },

    prepend : function(arr, item) {
			var arrCopy = arr.slice(0);
			arrCopy[0] = item;
			for (var i = 1; i <= arr.length; i++) {
				arrCopy[i] = arr[i - 1];
			}
			return arrCopy;
    },

    curtail : function(arr) {
			var arrCopy = arr.slice(0);
			arrCopy.splice(0, 1);
			return arrCopy;
    },

    concat : function(arr1, arr2) {
			return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
			var arrCopy = arr.slice(0);
			arrCopy[index] = item;
			for (var i = index + 1; i <= arr.length; i++) {
				arrCopy[i] = arr[i - 1];
			}
			return arrCopy;
    },

    count : function(arr, item) {
			var count = 0;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === item) {
					count++;
				}
			}
			return count;
    },

    duplicates : function(arr) {
			var dupItems = [];
			var contains = [];
			for (var i = 0; i < arr.length; i++) {
				if (this.indexOf(contains, arr[i]) >= 0 && this.indexOf(dupItems, arr[i]) === -1) {
					dupItems.push(arr[i]);
				}
				contains.push(arr[i]);
			}
			return dupItems;
    },

    square : function(arr) {
			var arrCopy = arr.slice(0);
			for (var i = 0; i < arr.length; i++) {
				arrCopy[i] = arrCopy[i] * arrCopy[i];
			}
			return arrCopy;
    },

    findAllOccurrences : function(arr, target) {
			var occ = [];
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === target) {
					occ.push(i);
				}
			}
			return occ;
    }
  };
});
