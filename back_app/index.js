const express = require('express');
const app = express();
const router = express.Router();

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    next();
 });



router.get('/', function (req, res) {
 res.send('Hello World!')
});
app.use('/', router);
app.listen(5000, function () {
 console.log('Example app listening on port 5000!')
});

router.get('/api/dailyquestion', function (req, res) {

    console.log('je suis en route!')
    res.json('you')
});