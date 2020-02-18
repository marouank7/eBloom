const  mysql = require('mysql');
const  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
<<<<<<< Updated upstream
    password : '1Mamama!',
=======
    password : 'password',
>>>>>>> Stashed changes
    database : 'Ebloom'
});
module.exports = connection;
