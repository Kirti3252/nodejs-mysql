var mysql = require('mysql');
 
function Connection() {
  this.pool = null;
 
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'testapp',
      port:3306
    });
  };
 
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
      console.log(" Data base connection done");
    });
  };
}
 
module.exports = new Connection();
