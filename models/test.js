var connection = require('../connection');
var jwt    = require('jsonwebtoken'); 
 
function Test() {

	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from test_data', function(err, result) {
        con.release();
        res.send(result);
        console.log(result);
            
      });
    });

  };
  this.create = function(test, res) {
    connection.acquire(function(err, con) {
      con.query('insert into test_data set ?', test, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TEST creation failed'});
        } else {
          res.send({status: 0, message: 'TEST created successfully'});
           console.log(result);
        }
      });
    });
  };
  this.update = function(test, res) {
    connection.acquire(function(err, con) {
      con.query('update test_data set ? where id = ?', [test, test.id],
  function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message:'TEST update failed'});
        } else {
          res.send({status: 0, message: 'TEST updated successfully'});
           console.log(result);
        }
      });
    });
  };
    this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from test_data  where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
           console.log(result);
        }
      });
    });
  };


     this.authenticate = function(req,res) {
    console.log("Authenticate2");
      // create a token
        var token = jwt.sign(req.body, "vmokshatechsecretapi", {
          expiresIn: '1440m'// expires in 24 hours
        });
        var response = {};
        response.token = token;
        //  res.send(response);

          res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });

          
  };

  
}
module.exports = new Test();
