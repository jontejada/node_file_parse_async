var fs = require('fs');
var filename = process.argv[2];
var re = /\w+/g;

fs.readFile(filename,'utf8',function(err,data){
	var wordArr = data.toLowerCase().match(re);
	var log = {};
	for (i=0; i<wordArr.length; i++) {
		if (!log[wordArr[i]]) {
			log[wordArr[i]] = 1;
		} else {
			log[wordArr[i]] +=1;
		}
	}
	console.log(log);
});
