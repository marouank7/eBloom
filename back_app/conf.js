const  mysql = require('mysql');
const  connection = mysql.createConnection({
    host     : 'localhost',
<<<<<<< HEAD
    user     : 'marouandb',
    password : '1Mamama!',
=======
    user     : 'root',
    password : '1Pipipi!',
>>>>>>> 92d1db7b3655558921b86ba136ad469d050d4530
    database : 'Ebloom'
});
module.exports = connection;
