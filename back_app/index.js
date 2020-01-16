const connection = require('./conf');
const express = require('express');
const app = express();
const port = 3005;
const router = express.Router();

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

// listen to "/api/employees"
// app.get('/surveys/:id', (req, res) => {
//  console.log("je suis dans le serveur")
  // const data = res.json([
  //       {
  //           type : "individual",
  //           questions : [
  //               {
  //                   content : "Qui es la ? ",
  //                   answer : 2,
  //                   notImportante : false
  //               },
  //               {
  //                   content : "Quel est le ",
  //                   answer : 3,
  //                   notImportante : false
  //               },
  //               {
  //                   content : "Quel est le ",
  //                   answer : 2,
  //                   notImportante : false
  //               }
  //           ]
  //       },
  //       {
  //         type : "team",
  //         questions : [
  //             {
  //                 content : "Qui es la ? ",
  //                 answer : 2,
  //                 notImportante : false
  //             },
  //             {
  //                 content : "Quel est le ",
  //                 answer : 3,
  //                 notImportante : false
  //             },
  //             {
  //                 content : "Quel est le ",
  //                 answer : 2,
  //                 notImportante : false
  //             }
            
  //         ]
  //       },
  //       {
  //         type : "company",
  //         questions : [
  //             {
  //                 content : "Qui es la ? ",
  //                 answer : 2,
  //                 notImportante : false
  //             },
  //             {
  //                 content : "Quel est le ",
  //                 answer : 3,
  //                 notImportante : false
  //             },
  //             {
  //                 content : "Quel est le ",
  //                 answer : 2,
  //                 notImportante : false
  //             }
            
  //         ]
  //       }
  //   ])
  
  //connection to the database, and selection of employees
  // connection.query('SELECT content, category from question', (err, results) => {

  //   if (err) {

  //     //  If an error has occurred, then the user is informed of the error
  //     res.status(500).send('Erreur lors de la récupération des employés');
  //   } else {

  //     // If everything went well, we send the result of the SQL query as JSON.
  //     res.json(results);
  //   }
  // });
//});

// listen to "/api/employees"
app.get('/surveys/:id', (req, res) => {
  console.log("je suis dans le serveur")
  console.log(req.params)
   //connection to the database, and selection of employees
   connection.query('SELECT * FROM survey WHERE id = ?', req.params.id, (err, results) => {
 
     if (err) {
 
       //  If an error has occurred, then the user is informed of the error
       res.status(500).send('Erreur lors de la récupération des employés');
     } else {

         // console.log(results[0])
          //console.log(JSON.parse(results.questions))

          const parsedSurvey = {
              ...results,
              questions: JSON.parse(results.questions)
          }

          console.log(parsedSurvey);
       // If everything went well, we send the result of the SQL query as JSON.
          res.json(parsedSurvey);
     }
   });
 });


// écoute de l'url "/api/employees" avec le verbe POST
app.post('/surveys', (req, res) => {
  
    console.log("je suis dans post")
    // récupération des données envoyées
    const formData = req.body;
    console.log(formData.surveys)
    formData.surveys = JSON.stringify(formData.surveys)
    //connexion à la base de données, et insertion de l'employé
    connection.query('INSERT INTO survey SET ?', formData, (err, results) => {
        console.log("je suis dans query")
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        // Si tout s'est bien passé, on envoie un statut "ok".
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