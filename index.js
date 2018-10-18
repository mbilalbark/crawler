var HTMLParser = require('node-html-parser');
var validator = require("email-validator");
var request = require('request');


request('https://stackabuse.com/learn-node-js-a-beginners-guide/', function (error, response, body) {
    var a;
    var root = HTMLParser.parse(body);
    a = root.structuredText.split(/\n/);
   for(i=0;i<a.length;i++){
        if(validator.validate(a[i]))
            console.log(a[i]);
   }
});


