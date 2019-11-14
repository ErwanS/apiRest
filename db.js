'user strict';

var mysql = require('mysql');

exports.db = (function() {
//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'bde',
})

  return connection;
})();
/*connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;*/
