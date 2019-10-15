// connect to my SQL
var mysel = require('mysql');

// make connection
var connection = mysel.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'gohawks2012$',
    database:'dankBurgers_db'
});

// EXPORT CONNECTION
module.exports = connection;