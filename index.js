var HTMLParser = require('node-html-parser');
var validator = require("email-validator");
var request = require('request');

let url="https://play.google.com/store/apps/details?id=com.pomelogames.TowerGame";
let count = 0;
while(count<2){
    request(url, function (error, response, body) {
        var a;
        var root = HTMLParser.parse(body);
        a = root.structuredText.split(/\n/);
       for(i=0;i<a.length;i++){
            if(validator.validate(a[i]))
                console.log(a[i]);
       }
       // TODO: rawAttrs will parse
       console.log(root.querySelectorAll("a")[0].rawAttrs)
    });
   count++;
   url="https://play.google.com/store/apps/details?id=com.n2games.westrunner.wildwestredemption";
}



