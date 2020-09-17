const fs = require('fs');
module.exports = function(filePath) {
  if (!filePath ) {
    return new Error("Must pass a file path.");
  }
  if (filePath && !filePath.startsWith("./")) {
    return new Error("Not a valid file path. Must start with ./");
  }
  var newRule = fs.readFileSync(filePath, 'utf8')
  //return "(()=>{return " + fs.readFileSync(`${filePath}`) + " })();";
  return newRule;
};