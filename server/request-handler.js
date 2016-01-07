  var queryString = require('querystring');

  /*************************************************************

  You should implement your request handler function in this file.

  requestHandler is already getting passed to http.createServer()
  in basic-server.js, but it won't work as is.

  You'll have to figure out a way to export this function from
  this file and include it in basic-server.js so that it actually works.

  *Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

  // The outgoing status.

  // See the note below about CORS headers

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10, // Seconds.
    "Content-Type": "application/json"
  };

  headers['Content-Type'] = "text/plain";

  var messages = [
    {
      hey: 'man',
      this: 'is a message'
    }
  ];


  var sendResponse = function(response, statusCode, data) {
    var statusCode = statusCode || 200;
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(data));
  };

  var collectData = function (response, cb) {
    var data = '';
    response.on('data', function (chunk){
      data += chunk;
    });

    response.on('end', function(){
      cb(JSON.parse(data));
    });
  };

  var actions = {
    'GET': function (request, response) {
      sendResponse(response, 200, {results: messages});
    },

    'POST':function (request, response) {
      collectData(response, function(message) {
        messages.push(message);
        sendResponse(response, 201, {results: messages});
      });
    },

    'OPTIONS': function (request, response) {
      sendResponse(response, 200, {objectId:1});
    }
  }
  var requestHandler = function(request, response) {
    var action = actions[request.method];

    if (action){
      action(request, response);
    } else {
      sendResponse(response, 404);
    }
  console.log("Serving request type " + request.method + " for url " + request.url);
  };


  module.exports = requestHandler;





// if (request.method === "GET") {

//       switch (request.url) {

//         case "/classes/messages":
//           sendResponse(response, 200, {results: messages});
//           break;

//         case "/classes/room1":
//           sendResponse(response, 200, {results: messages});
//           break;

//         default:
//           sendResponse(response, 404);
//       }

//     } else if (request.method === "POST") {

//         switch (request.url) {

//           case "/classes/messages":

//             var postData = '';

//             request.on('data', function(chunk){
//               postData += chunk;
//             });

//             request.on('end', function() {
//               messages.push(JSON.parse(postData));
//               console.log(messages);
//               sendResponse(response, 201);
//             });

//             break;

//           case "/classes/room1":

//             var postData = '';

//             request.on('data', function(chunk){
//               postData += chunk;
//             });

//             request.on('end', function() {
//               var parsed = JSON.parse(postData);
//               parsed.objectId = objectId;
//               messages.push(parsed);
//               sendResponse(response, 201);
//               ++objectId;
//             });
//             break;

//           default:
//             sendResponse(response, 501);
//         }
//     } else if (request.method === "OPTIONS") {
//       sendResponse(response, 200, null);
//     }