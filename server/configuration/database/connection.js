var mysql = require('mysql');
var database = require('../../configuration/config').database;
var connection = mysql.createConnection({
    host     : database.host,
    user     : database.username,
    password : database.password,
    database : database.dbname
});
connection.connect((err) => { if(err) return; });

module.exports = connection;

