var fs = require('fs');
var filename = process.argv[2];
function print(string) {
  console.log("kewl: " + string);
}
var KnownCommands = {
  print: print
}

fs.readFile(filename, 'utf-8', function(err, data) {
  var lines = data.split('\n');
  lines.forEach(function(line) {
    var command = "",
        output = "",
        midString = false;

    for(var i = 0; i < line.length; i++) {
      //console.log(line.charAt(i));
      // first character or end character of string
      if (line.charAt(i) == "'") {
        // invert status of if in a word or not
        midString = !midString;
        //console.log(midString);
      // otherwise if it is a space and we are not mid-word, skip it
      } else if (line.charAt(i) == ' ' && !midString) {
        continue;
      // if not in a string then must be a command since not a space
      } else if (!midString) {
        command += line.charAt(i);
        //console.log(command);
      // otherwise content is part of an output string
      } else {
        output += line.charAt(i);
        console.log(output);
      }
    }

    if (command) KnownCommands[command](output);
  });
});