// //Lets require/import the HTTP module
// var http = require('http');
//
// //Lets define a port we want to listen to
// const PORT=3000;
//
// //We need a function which handles requests and send response
// function handleRequest(request, response){
//
//  response.end('<html><head></head><body>It Works!! Path Hit: ' + request.url+'</body></html>');
//
//  }
//
// //Create a server
// var server = http.createServer(handleRequest);
//
// //Lets start our server
// server.listen(PORT, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", PORT);
// });
//

var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'aquifer'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connection was made');
  console.log('connected as id ' + connection.threadId);
});


var http = require('http');
var port = 9000;

http.createServer(function (req, resp) {
  resp.writeHead(200, {"Content-Type": "text/html"});
  resp.write("
  <html>
    <body>
        <h1> hi</h1>
    </body>
  </html>
  ");
  resp.end();
 //
 // switch (req.method) {
//   case "GET":
//
//     break;
//     case "Post":
//
//       break;
//   default:
//
//     break;


}).listen(port);
