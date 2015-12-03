var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename,'utf8',function(err,data){
	var lines = data.split('\n');
	var lengths = 0;
	for (i=0; i<lines.length; i++) {
		lengths += lines[i].length;
	}
	console.log(lengths/lines.length);
});
