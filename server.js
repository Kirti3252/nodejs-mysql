var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes')
var config = require('./config'); // get our config file
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var php = require("php"); //With Node PHP you can leverage the speed of node js and run all of the widely available php scripts directly inside your express site.

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.use('/style',  express.static(__dirname + '/style'));


// app.use(function(req, res, next) {

//   // check header or url parameters or post parameters for token
//  var token = req.headers.authorization;
//   console.log(token);

// //    // decode token
// //   // if (token) {

// //   //  // verifies secret and checks exp

// //   // jwt.verify(token, app.get('superSecret'), function (err, decoded) {                    
// //   //                  if (err) {
// //   //                      if (err == "TokenExpiredError: jwt expired") {
// //   //                         appExtensions.logger.error("JWT Token Error " + err);
// //   //                          return res.json({ Success: false, Message: 'Session has been expired.' });
// //   //                      }
// //   //                      else {
// //   //                          res.send("decoded11");
// //   //                          req.decoded = decoded;
// //   //                          res.send("decoded11");  
// //   //                      }
// //   //                  }
// //   //                  else
// //   //                      {
// //   //                      if (typeof decoded == 'object') {
// //   //                      	console.log("decoded");
// //   //                          //Executing next call back function
// //   //                          next();
// //   //                      }
// //   //                      else {
// //   //                          res.send(" test");
// //   //                      }
// //   //                  }
// //   //              });
// //   //        }
// //   //      });
//  if (token) {

//     // verifies secret and checks exp
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;    
//         next();
//       }
//     });

//   } else {

//     // if there is no token
//     // return an error
//     return res.status(403).send({ 
//         success: false, 
//         message: 'No token provided.' 
//     });
//   }
    
// });

connection.init();
//------------------------------------------------------------------------------//





//------------------------------------------------------------------------------//

routes.configure(app);
var port = process.env.PORT || 8080; 
app.set('superSecret', config.secret); // secret variable

var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});
