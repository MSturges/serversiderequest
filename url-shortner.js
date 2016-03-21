var request = require('request');
var url = 'https://www.googleapis.com/urlshortener/v1/url'
+ '?key=AIzaSyBoIn4DYo-g62Wgvdoo5VNHEHizSnkJFOs';

var data = {
  longUrl: process.argv[2]
  // longUrl: 'http://www.tripadvisor.com'
}

var options = {
  uri: url,
  method: 'POST',
  json: data,
}

request(options, function (err, res, body) {
  if (err) {

  } else if (res.statusCode != 200){
    console.log("unexpected response code" + res.statusCode);
    console.log(body);
  } else {
    console.log(body);
  }
});
