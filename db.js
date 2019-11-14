'user strict';

var mysql = require('mysql');

exports.db = (function() {
//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'bdeuser',
    password : 'bde2019!',
    database : 'bde',
})

  return connection;
})();
/*connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;*/
