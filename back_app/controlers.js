
const connection = require('./conf');
const moment = require('moment');

const readWeekSurvey = (lastMondayDate, companyName, type = 'everyday') => {
    return new Promise( resolve => {
        connection.query(`SELECT * FROM surveys  WHERE  type = "${type}"  AND  company =  "${companyName}"  AND  date =  "${lastMondayDate}" `, (err, results) => { 
    
            if(err) {
              console.log("Query Error on /surveys/today...");
              return err //.status(500).send("Query Error from server on surveys/today !");
            } else {
              console.log("results : GOT IT ");
                if (results[0] && results != undefined) {
                  const data  = results[0]
                 console.log("<<<<<<xx<<");
                  data.questions = JSON.parse(results[0].questions);
                  console.log(data, "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
                  delete data["created_at"];
                  delete data["updated_at"];
                  resolve(data);
                }else {
                  resolve({questions :
                            {Monday : "",
                            Tuesday : "",
                            Wednesday : "",
                            Thursday : "",
                            Friday : ""}, 
                            id : null}) ;
                }
            }
        })
    })
   
}

//__ Ressource : answers

exports.createAnswer = (req, res) => {

    connection.query('INSERT INTO feedbacks SET ?', req.body, (err, results) => {
        console.log("je suis dans query")
        if (err) {
          console.log(err);
          res.status(500).send("Erreur");
        } else {
          //console.log(results)
          res.json(results[0]);
        }
      });

}

//__ Ressource : daily survey

 async function findWeekSurvey(req, res) { //fusion des middlewares
    const type = req.query.type ;
    const companyName = req.query.company ;
    let currencyTime = "";
    let forToday = false ;
    if(type==="everyday" && companyName) {
        if (req.query.date) {
            currencyTime = req.query.date ; //In order to get the previous Monday from this date 
        } else {
            currencyTime = new Date() ; // In order to get the Monday date of this week
            forToday = true ; 
        }
    } else res.status(400).send("Request error from client : unconsistent query data either about type or company !") ;
   
    const lastMondayTime = moment(currencyTime).startOf('week').add(1, "days");
    const lastMondayDate = lastMondayTime.format("YYYY-MM-DD") ;
    let result = {} ;
    try {
        result = await readWeekSurvey(lastMondayDate, companyName)
        console.log("_________________",currencyTime,result)
    } catch (error) {
        console.log("rejection error occured :")
        console.error(error)
    } finally {
        if (!forToday) res.json(result) ;
        else {
            console.log("math starts with ", result)
            // Get day name from the starting time of the survey compared to now .
            const days = ["Monday","Tuesday","Wednesday", "Thursday", "Friday"];
            const  a = moment(currencyTime);
            const  b = moment(lastMondayTime);
            const daysRange = a.diff(b, 'days') ;
                //console.log( questionsWeek.questions[days[cd]]) ;
            const todayQuestion = result.questions[days[daysRange]] ;
            res.json(todayQuestion);
        }
    } 
}
exports.findWeekSurvey = findWeekSurvey ;


exports.createWeekSurvey = (req, res) => {
        console.log("je suis dans post")
    // récupération des données envoyées
      const postData = req.body;
        console.log("postData",postData);
      postData.questions = JSON.stringify(postData.questions);
          console.log("postData.questions", postData.questions)
      postData.date = moment(postData.date).startOf('week').add(1, "days").format("YYYY-MM-DD ");
      console.log(">>>", postData)
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
}
// both need a common function to cut off unreadable redundancy
exports.updateWeekSurvey = (req, res) => {
        console.log("je suis dans put")
        // récupération des données envoyées
        const postData = req.body;
        
        postData.questions = JSON.stringify(postData.questions);
        
        console.log(">>>", postData)
        postData.date = moment(postData.date).startOf('week').add(1, "days").format("YYYY-MM-DD");
        console.log(">>>", postData)
        
        //connexion à la base de données, et insertion du survey
        connection.query(`UPDATE surveys SET ? WHERE id = ?`, [postData, postData.id], (err, results) => {
          console.log("je suis dans survey DB")
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            console.log(err);
            res.status(500).send("Erreur for updating");
          } else {
            // Si tout s'est bien passé, on envoie un statut "ok".
            console.log(results)
            res.json(results);
          }
        });       
}

//__ Ressource : kick-off survey

  // employee || admin
exports.findOnboardingSurvey = (companyName, req, res) => {
    console.log("je suis dans onboarding serveur")
    console.log("param: ", companyName)
      // connection to the database, and selection of employees
      connection.query(`SELECT * FROM surveys  WHERE  type = "Onboarding"  AND  company = "${companyName}" ORDER BY created_at DESC`, (err, results) => {
        if (err) {
          console.log(err);
          //  If an error has occurred, then the user is informed of the error
          res.status(500).send('Query Error on /onboarding/' + companyName);
        } else {

              const data  = results[0]
              data.questions = JSON.parse(results[0].questions);
              console.log(data);
              res.json(data);
        }
    })
}

  // admin
exports.createOnboardingSurvey = (req, res) => {
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
}