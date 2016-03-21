var express = require('express');
var request = require('request')

var app = express();

app.get('/', function(requestFC, responseTC) {
  request.get('http://www.omdbapi.com/?t=source+code&y=&plot=short&r=json',

  function(error, ombdresponse, ombdBody) {
    if (error) {
      responseTC.status(500).send("Error - " + error);
    } else if (ombdresponse.statusCode >= 500) {
      responseTC.status(500).send("unexpected response from server:" + ombdresponse.statusCode);
    } else {
      var movieData = JSON.parse(ombdBody);
      responseTC.send(
        "<h1>Title: " + movieData.Title + "</h1>" +
        "Year: " + movieData.Year);
    }
  })

});

app.listen(3000, function() {
  console.log("start Server on local host 3000");
});
