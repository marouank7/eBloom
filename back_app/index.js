const express = require('express');
const app = express();
const router = express.Router();
router.get('/', function (req, res) {
 res.send('Hello World!')
});
app.use('/', router);
app.listen(5000, function () {
 console.log('Example app listening on port 5000!')
});