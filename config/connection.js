var mysql = require('mysql');
var config = require('./config');
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWS_URL);
}else{
  connection = mysql.createConnection(config.keys);
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
