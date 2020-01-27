
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

//__ GET ROUTES
  // Q-TODAY <<<<<<<< employee
app.get('/surveys/question-today', (req, res) => {

  // today
  const now = new Date() ;
  const today = moment(now).format("YYYY-MM-DD ");
  console.log(moment().day(0));

  
  // get the Monday date of this week 
  const lastMondayTime = moment(now).startOf('week').add(1, "days");
  const lastMondayDate = lastMondayTime.format("YYYY-MM-DD") ;
    //console.log("looking for this Monday date :", lastMondayDate) ;
  connection.query('SELECT * FROM surveys WHERE date = ?', lastMondayDate, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Query Error on /question-today");

    } else {
      //result parsing and rebuilding
      let questionsData= results[0] ;
          //console.log(questionsData);
      const questionsWeek = {...questionsData} ;
      questionsWeek.questions = JSON.parse(questionsWeek.questions) ;
      
          //console.log(questionsWeek.questions);
      // Get day name from the starting time of the survey compared to now .
      const days = ["Monday","Tuesday","Wednesday", "Thursday", "Friday"];
      const  a = moment(now);
      const  b = moment(lastMondayTime);
      const daysRange = a.diff(b, 'days') ;
          //console.log( questionsWeek.questions[days[cd]]) ;
      const todayQuestion = questionsWeek.questions[days[daysRange]] ;

      res.json(todayQuestion);

    }
  })
})

  // Q-TODAY <<<<<<<< admin
app.get('/surveys/today', (req, res) => {
  const type = req.query.type ;
  const brand = req.query.company ;
  const date = req.query.date ;
  console.log ( type, brand, date, "in the server to get everyday survey");
  connection.query(`SELECT * FROM surveys  WHERE  type = "${type}"  AND  company =  "${brand}"  AND  date =  "${date}" `, (err, results) => { 
    
    if(err) {
      console.log("Query Error on /surveys/today...");
      res.status(500).send("Query Error from server on surveys/today !");
    } else {

        const data  = results[0]
        data.questions = JSON.parse(results[0].questions);
        console.log(data);
        res.json(data);
    }
  })

})




// Q-ONBOARDING <<<<<<<
app.get('/surveys/onboarding/:company', (req, res) => {
  console.log("je suis dans onboarding serveur")
  const brand = req.params.company ;
  console.log("param: ", brand)

  // connection to the database, and selection of employees
      connection.query(`SELECT * FROM surveys  WHERE  type = "Onboarding"  AND  company = "${brand}" `, (err, results) => {
        if (err) {
          console.log(err);
          //  If an error has occurred, then the user is informed of the error
          res.status(500).send('Query Error on /onboarding/' + brand);
        } else {

              const data  = results[0]
              data.questions = JSON.parse(results[0].questions);
              console.log(data);
              res.json(data);
        }
    })
  });
//query for the newest : ' SELECT * FROM survey WHERE `type` = "Onboarding" AND (create_at IN (SELECT max(create_at))) ORDER BY id DESC'



////utile pour le semainier 'SELECT * FROM survey WHERE date IN (SELECT max(date) FROM survey);'


//__ POST ROUTES

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