const  mysql = require('mysql');
const  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1Pipipi!',
    database : 'Ebloom'
});
module.exports = connection;
