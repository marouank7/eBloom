

const express = require('express');
const app = express();
const port = 3005;
//const router = express.Router();
const bodyParser = require('body-parser');
const controls = require('./controlers');


// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));
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

//__ Ressource : answers

app.post('/feedbacks', (req, res) => controls.createAnswer(req, res) );

//__ Ressource : daily survey

  // employee
app.get('/surveys/question-today', (req, res) => controls.WEEEK(req,res) );

  // admin
app.get('/surveys/today', (req, res) => controls.WEEEK(req,res) );

app.post('/surveys/today', (req, res) => controls.createWeekSurvey(req, res) );

app.put('/surveys/today', (req, res) => controls.updateWeekSurvey(req, res) );

//__ Ressource : kick-off survey

  // employee || admin
app.get('/surveys/onboarding/:company', (req, res) => {
  const companyName = req.params.company ;
  controls.findOnboardingSurvey(companyName, req, res);
});
//query for the newest : ' SELECT * FROM survey WHERE `type` = "Onboarding" AND (create_at IN (SELECT max(create_at))) ORDER BY id DESC'

  // admin
app.post('/surveys', (req, res) => controls.createOnboardingSurvey(req, res) );

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});