const  mysql = require('mysql');
const  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'MySQL+2019',
    database : 'Ebloom'
});
module.exports = connection;
