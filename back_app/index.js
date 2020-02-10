
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


//__ Ressource : answers

app.post('/feedbacks', (req, res) => {


  const postData = req.body;


  connection.query('INSERT INTO feedbacks SET ?', postData, (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur

      res.status(500).send("Erreur");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".

      res.json(results[0]);
    }
  });

});

//__ Ressource : daily survey

  // employee
app.get('/surveys/question-today', (req, res) => {

  // from today
  const now = new Date() ;
  const today = moment(now).format("YYYY-MM-DD");


  // get the Monday date of this week
  const lastMondayTime = moment(now).startOf('week').add(1, "days");
  const lastMondayDate = lastMondayTime.format("YYYY-MM-DD") ;
    //
  connection.query('SELECT * FROM surveys WHERE date = ?', lastMondayDate, (err, results) => {
    if (err) {

      res.status(500).send("Query Error on /question-today");

    } else {
      //result parsing and rebuilding
      let questionsData = results[0] ;
      if(questionsData) {
        const questionsWeek = {...questionsData} ;
        questionsWeek.questions = JSON.parse(questionsWeek.questions) ;

            //
        // Get day name from the starting time of the survey compared to now .
        const days = ["Monday","Tuesday","Wednesday", "Thursday", "Friday"];
        const  a = moment(now);
        const  b = moment(lastMondayTime);
        const daysRange = a.diff(b, 'days') ;
            //
        const todayQuestion = questionsWeek.questions[days[daysRange]] ;

        res.json(todayQuestion);
      } else {
        res.status(404).send("No surey scheduled yet");
      }
    }
  })
})

  // admin
app.get('/surveys/today', (req, res) => {
  const type = req.query.type ;
  const brand = req.query.company ;
  const date = req.query.date ;
  //Get the previous Monday of the this date
  const lastMondayTime = moment(date).startOf('week').add(1, "days");
  const lastMondayDate = lastMondayTime.format("YYYY-MM-DD") ;

  connection.query(`SELECT * FROM surveys  WHERE  type = "${type}"  AND  company =  "${brand}"  AND  date =  "${lastMondayDate}" `, (err, results) => {

    if(err) {

      res.status(500).send("Query Error from server on surveys/today !");
    } else {

        if (results[0] && results != undefined) {
          const data  = results[0]

          data.questions = JSON.parse(results[0].questions);

          delete data["created_at"];
          delete data["updated_at"];
          res.json(data);
        } else {
          res.status(404).send("Not found yet");
        }
    }
  })

})

app.post('/surveys/today', (req, res) => {

// récupération des données envoyées
  const postData = req.body
  console.log(postData)

  postData.questions = JSON.stringify(postData.questions);

  postData.date = moment(postData.date).startOf('week').add(1, "days").format("YYYY-MM-DD");

  //connexion à la base de données, et insertion du survey
  connection.query('INSERT INTO surveys SET ?', postData, (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send("Erreur");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.json(results);
    }
  });
});

app.put('/surveys/today', (req, res) => {

// récupération des données envoyées
const postData = req.body;

postData.questions = JSON.stringify(postData.questions);
postData.date = moment(postData.date).format("YYYY-MM-DD")

postData.date = moment(postData.date).startOf('week').add(1, "days").format("YYYY-MM-DD");

//connexion à la base de données, et insertion du survey
connection.query(`UPDATE surveys SET ? WHERE id = ?`, [postData, postData.id], (err, results) => {

  if (err) {
    // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur

    res.status(500).send("Erreur for updating");
  } else {
    // Si tout s'est bien passé, on envoie un statut "ok".

    res.json(results);
  }
});
});

//__ Ressource : kick-off survey

  // employee || admin
app.get('/surveys/onboarding/:company', (req, res) => {
    const brand = req.params.company ;

      // connection to the database, and selection of employees
      connection.query(`SELECT * FROM surveys  WHERE  type = "Onboarding"  AND  company = "${brand}" `, (err, results) => {
        if (err) {
          //  If an error has occurred, then the user is informed of the error
          res.status(500).send('Query Error on /onboarding/' + brand);
        } else {
              if(results[0]) {
                const data  = results[0]
                data.questions = JSON.parse(results[0].questions);
                res.json(data);
              }
              else {
                res.status(404).send("Not found");
              }


        }
    })
});
//query for the newest : ' SELECT * FROM survey WHERE `type` = "Onboarding" AND (create_at IN (SELECT max(create_at))) ORDER BY id DESC'

  // admin
app.post('/surveys', (req, res) => {

    // récupération des données envoyées
    const postData = req.body;


    postData.questions = JSON.stringify(postData.questions);
    postData.date = moment(postData.date).format("YYYY-MM-DD")

    //
    //connexion à la base de données, et insertion du survey
    connection.query('INSERT INTO surveys SET ?', postData, (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur

        res.status(500).send("Erreur");
      } else {
        // Si tout s'est bien passé, on envoie un statut "ok".

        res.json(results);
      }
    });
});

app.put('/surveys/:id', (req, res) => {

    // récupération des données envoyées
    const postData = req.body;


    postData.questions = JSON.stringify(postData.questions);
    postData.date =  moment(postData.date).format("YYYY-MM-DD");
    //
    //connexion à la base de données, et insertion du survey
    connection.query(`UPDATE surveys SET ? WHERE id = ?`, [postData, req.params.id], (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur

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

});
