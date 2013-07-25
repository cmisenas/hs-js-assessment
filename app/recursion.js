if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
			var files = [];
			for (var i = 0; i < data.files.length; i++) {	
				if (typeof data.files[i] == 'object') {
					if (dirName === undefined || (dirName !== undefined && dirName == data.files[i].dir)) {					
						files = files.concat(this.listFiles(data.files[i]));
					} else {
						files = files.concat(this.listFiles(data.files[i], dirName));
					}
				} else {
					if (dirName === undefined || (dirName !== undefined && dirName == data.dir)) {
						files.push(data.files[i]);
					}
				}
			}
			return files;
    },

    permute: function(arr) {
			var per = [];
			var fin = [];
			function recPer(arrp) {
				for (var i = 0; i < arrp.length; i++) {
					var elem = arrp.splice(i, 1)[0];
					fin.push(elem);
					if (arrp.length === 0)
						per.push(fin.slice());
					recPer(arrp);
					arrp.splice(i, 0, elem);
					fin.pop();
				}
				return per;
			}
			return recPer(arr);
		}
  };
});
