var mysql = require('mysql');
 
function Connection() {
  this.pool = null;
 
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'sql6.freesqldatabase.com',
      user: 'sql6157867',
      password: '5xytwqbMJE',
      database: 'sql6157867',
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
