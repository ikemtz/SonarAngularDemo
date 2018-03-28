const replace = require("replace-in-file");
var path = require("path");

console.log(__dirname);
const regex = /\\/g;
const regexString =  __dirname.replace(regex, "\\/");
console.log(regexString);
const options = {
  files: "coverage/lcov.info",
  from: new RegExp(regexString, "g"),
  to: "SonarAngularDemo"
};

replace(options)
  .then(changes => {
    console.log("Modified files:", changes.join(", "));
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
