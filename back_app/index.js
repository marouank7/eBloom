
const connection = require('./conf');
const express = require('express');
const app = express();
const port = 3005;
const router = express.Router();
const moment = require('moment');
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

app.post('/companies', (req, res) => controls.createCompany(req, res));
app.get('/companies', (req, res) => controls.findAllcompanies(req, res));
// app.get('/companies/:companyName', (req, res) => controls.findCompany(req, res));
// app.put('/companies/:companyName', (req, res) => controls.updateCompany(req, res));
// app.delete('/companies/:companyName', (req, res) => controls.deleteCompany(req, res));

//__ Ressource : answers
app.post('/feedbacks', (req, res) => controls.createAnswer(req, res) );

//__ Ressource : daily survey
  // employee
app.get('/surveys/question-today', (req, res) => controls.findWeekSurvey(req,res) );
  // admin
app.get('/surveys/today', (req, res) => controls.findWeekSurvey(req,res) );
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

app.put('/surveys/:id', (req, res) => controls.updateOnboardingSurvey(req, res));

  // écoute de l'url "/api/mployees"
app.get('/dashboard/:category', (req, res) => {
     const category = req.params.category;
      // connection à la base de données, et sélection des employés
      connection.query(`select ROUND(AVG(answer),1) from feedbacks where category = "${category}";`, (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des statistiques');
      } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results[0]);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

});
