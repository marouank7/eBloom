const  mysql = require('mysql');
const  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'marouandb',
    password : '1Mamama!',
    database : 'Ebloom'
});
module.exports = connection;
