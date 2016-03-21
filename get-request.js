// var request = require('request');
//
// request.get('https://pacfic-stream-1533.herokuapp.com/', function(error, response, body){
//   if (error) {
//     console.log("Error " + error);
//   }
//   if (response.statusCode != 200 ) {
//     console.log("unexpected response code" + response.statusCode);
//   }
//   else {
//     console.log(body);
//   }
// });


var request = require('request');

request.get('omdbapi', function(error, response, body) {
  if (error) {
    console.log(error);

  } else  if (response.statusCode === 404) {
    console.log("request dose not exist");
  } else {
    var bodyAsJason = JSON.parse(body);
    console.log("Title:" + bodyAsJason.Title + ",Year:" + bodyAsJason.Year);
  }
});
