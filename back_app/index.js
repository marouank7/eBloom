
const connection = require('./conf');
const express = require('express');
const app = express();
const port = 3005;
const router = express.Router();
const moment = require('moment');
const bodyParser = require('body-parser');
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

app.get('/dailyquestion', (req, res) => {
  // 1 Avec momentjs recupérer la date du jour
  // 2 Trouver la date du lundi de la semaine de ce jour la
  // 3 Chercher dans la table surveys, la ligne dont la date est egale a ce lundi
  // 4 Parser la clef questions qui est en json
  // 5 Récuperer la quesiton associé au jour dans cette object
    res.json("Satisfait de votre semaine avec l'équipe ?")
})







// listen to "/api/employees"
app.get('/surveys/:id', (req, res) => {
  console.log("je suis dans le serveur")
  console.log(req.params)
   //connection to the database, and selection of employees
  //  if (req.params.id !== -1 ) {
  //     connection.query('SELECT * FROM survey WHERE id = ?', req.params.id, (err, results) => {
  //       if (err) {
  //         console.log(err);
  //         //  If an error has occurred, then the user is informed of the error
  //         res.status(500).send('Erreur lors de la récupération du survey');
  //       } else {
  //             results[0].questions = JSON.parse(results[0].questions);
  //             res.json(results[0]);
  //       }
  //     })
  //   } else {
      connection.query(`SELECT * FROM surveys WHERE id = ${req.params.id}`, (err, results) => {
        if (err) {
          console.log(err);
          //  If an error has occurred, then the user is informed of the error
          res.status(500).send('Erreur lors de la récupération du survey');
        } else {
              results[0].questions = JSON.parse(results[0].questions);
              res.json(results[0]);
        }
    })

});

////utile pour le semainier 'SELECT * FROM survey WHERE date IN (SELECT max(date) FROM survey);'


app.post('/feedbacks', (req, res) => {

  console.log("je suis là!!!")
  const postData = req.body;
  console.log(postData);

  connection.query('INSERT INTO feedbacks SET ?', postData, (err, results) => {
    console.log("je suis dans query")
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      console.log(results)
      res.json(results);
    }
  });

});






// écoute de l'url "/api/employees" avec le verbe POST
app.post('/surveys', (req, res) => {
    console.log("je suis dans post")
    // récupération des données envoyées
    const postData = req.body;
    console.log(postData);

    postData.questions = JSON.stringify(postData.questions);
    //console.log(postData)
    //connexion à la base de données, et insertion du survey
    connection.query('INSERT INTO surveys SET ?', postData, (err, results) => {
      console.log("je suis dans query")
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        // Si tout s'est bien passé, on envoie un statut "ok".
        console.log(results)
        res.json(results);
      }
    });
});




  app.post('/questionOftheWeek', (req, res) => {
    console.log("je suis dans post")
    // récupération des données envoyées
    const postData = req.body;
    console.log("postData",postData);

    postData.questions = JSON.stringify(postData.questions);
    console.log("postData.questions", postData.questions)
    postData.date = moment(postData.date).startOf('week').add(1, "days").format("YYYY-MM-DD ");
    //console.log(postData)
    //connexion à la base de données, et insertion du survey
    connection.query('INSERT INTO surveys SET ?', postData, (err, results) => {
      console.log("je suis dans survey DB")
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        // Si tout s'est bien passé, on envoie un statut "ok".
        console.log(results)
        res.json(results);
      }
    });
  });
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
