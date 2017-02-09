var test = require('./models/test');

var mysql = require('mysql');
var connection = mysql.createConnection({

  host: 'sql6.freesqldatabase.com',
  user: 'sql6157867',
  password: '5xytwqbMJE',
  database: 'sql6157867',
  posrt:3306
});
 
module.exports = {
  configure: function(app) {
    app.get('/test/', function(req, res) {
      test.get(res);
    });

    app.post('/test/', function(req, res) {
      test.create(req.body, res);
    });

    app.put('/test/', function(req, res) {
      test.update(req.body, res);
    });

    app.delete('/test/:id/', function(req, res) {
      test.delete(req.params.id, res);
    });

     app.post('/api/authenticate', function(req, res) {
      console.log("Authenticate");
      test.authenticate(req, res);
    });
     app.get('/message',function(req,res){
    res.sendFile('message.html',{'root': __dirname + '/models'});
});
     
     app.get('/',function(req,res){
    res.sendFile('home.html',{'root': __dirname + '/models'});
});
     app.get('/user',function(req,res){
  res.sendFile('getuser.html',{'root':__dirname + '/models'})
});
      app.get('/user2',function(req,res){
  res.sendFile('user.php',{'root':__dirname + '/models'})
});


app.get('/showSignInPage',function(req,res){
    res.sendFile('signin.html',{'root': __dirname + '/models'});
});
app.get('/showSignInPageretry',function(req,res){
    res.sendFile('signinretry.html',{'root': __dirname + '/models'});
});
app.get('/showSignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/models'})
});
app.get('/getuser',function(req,res){
  res.sendFile('getuser.html',{'root':__dirname + '/models'})
});

app.get('/message',function(req,res){
    res.sendFile('message.html',{'root': __dirname + '/models'});
});

app.get('/loggedin',function(req,res){
    res.sendFile('loggedin.html',{'root': __dirname + '/models'});
});



app.post('/myaction', function(req, res) {
  console.log('req.body');
  console.log(req.body);
  var record = {email: req.body.email, password: req.body.password};

  //connection.connect();
  connection.query('INSERT INTO test_data SET ?', record, function(err,res){
      if(err) throw err;
    console.log('Last record insert id:', res.insertId);
    
  });

  res.redirect('/message');
  //connection.end();

  res.end();
});

  }
};
