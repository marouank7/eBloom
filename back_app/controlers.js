
const connection = require('./conf');
const moment = require('moment');
const inTable = require('./models') ;

//__ utils for POSTed surveys.
const surveyFormat = (request) => {
  const postData = request.body;    
  postData.questions = JSON.stringify(postData.questions);
  if(postData.date) postData.date = moment(postData.date).startOf('week').add(1, "days").format("YYYY-MM-DD");
  return postData ;
}

//__ Ressource : companies
exports.createCompany = (req, res) => {
  connection.query('INSERT INTO companies SET ?',req.body, (err, results) => {
    if (err) {
      console.error("Post new company into companies table: ", err)
      res.status(500).send("Erreur for creating new company");
    } else {
      console.log("insertion into companies: ", results)
      res.status(200);
      res.json(results);
    }
  })
  // let response = {} ;
  // let httpState = 0;
  // try {
  //    response = inTable.addCompany(req) ;
  //    httpState = 200 ;
  // } catch (e) {
  //   console.error(e, "______the error occurded");
  //   response = e ;
  //   httpState = 500 ;
  // } finally {
  //   console.log(response, "_ _ _will be sent");
  //   if(httpState !== 200 )res.status(httpState);
  //   res.json(response);
  // }
  //
};
exports.findAllcompanies = (req, res) => {
  connection.query('SELECT name, administrator, logo, id FROM companies', (err, results) => {
    //console.log(results);
    if(err) {
      console.error("Cannot query company list !");
     res.status(500).send("Error acces : Cannot query company list !", err);
    } else {
      //console.log(">>> companies list >>>", results);
      res.json(results);
    }
  })
}

//__ Ressource : answers
exports.createAnswer = (req, res) => {
  console.log("je suis dans feetbacks!!!",req.body);
    connection.query('INSERT INTO feedbacks SET ?', req.body, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur");
        } else {
          // Si tout s'est bien passé, on envoie un statut "ok".
          console.log(results)
          res.json(results[0]);
        }
      });

}

//__ Ressource : daily survey

async function findWeekSurvey(req, res) { //async
    const type = req.query.type ;
    const companyName = req.query.company ;
    let currencyTime = "";
    let forTodayOnly = false ;
    if(type.toLowerCase() ==="everyday" && companyName) {
        if (req.query.date) {
          //console.log("findWeekSurvey : 79")
            currencyTime = req.query.date ; //In order to get the previous Monday from this date 
        } else {
         // console.log("findWeekSurvey : 82")
            currencyTime = new Date() ; // In order to get the Monday date of this week
            forTodayOnly = true ; 
        }
    } else res.status(400).send("Request error from client : unconsistent query data either about type or company !") ;
    //console.log("findWeekSurvey : 87")
    const lastMondayTime = moment(currencyTime).startOf('week').add(1, "days");
    const lastMondayDate = lastMondayTime.format("YYYY-MM-DD") ;
    let result = {} ;
    try {
        // inTable_____ from Ebloom DB
        result = await inTable.readWeekSurvey(lastMondayDate, companyName)  //await
       // console.log("findWeekSurvey : 94")
        //console.log("_________________", currencyTime, result)
        if(result) {
          //console.log("findWeekSurvey : 97")
          //console.log("got result >>>>>> :", result);
          if (!forTodayOnly) { console.log("findWeekSurvey : 99"); res.json(result)  }
          else {
            
            //console.log("findWeekSurvey : 101")
              console.log("math starts with ", result)
              // Get day name from the starting time of the survey compared to now .
              const days = ["Monday","Tuesday","Wednesday", "Thursday", "Friday"];
              const  a = moment(currencyTime);
              const  b = moment(lastMondayTime);
              const daysRange = a.diff(b, 'days') ;
                  console.log( daysRange) ;
                  //const todayQuestion = result.questions.filter( (Q) => )
              const todayQuestion = result.questions[daysRange] ;
             // console.log("findWeekSurvey : 110")
              //console.log("Todayquestion ? see its legnth :", todayQuestion)
  
              if(todayQuestion.length < 1 ) {res.status(404).send("No survey scheduled yet") }
              else {res.json(todayQuestion);}
          }
        } else {
          //console.log("findWeekSurvey: 117");
          res.status(404).send("Not found");
        }
    } catch (error) {
        console.log("My message : error or undefined results from query occured :")
        console.error(error)
        // envoi erreur depuis model ??
    }
}
exports.findWeekSurvey = findWeekSurvey ;


exports.createWeekSurvey = (req, res) => {
        console.log("je suis dans post")
      const postData = surveyFormat(req) ;
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
          //console.log(results)
          res.json(results);
        }
      });
}
// both need a common function to cut off unreadable redundancy
exports.updateWeekSurvey = (req, res) => {
          console.log("je suis dans put")
        const postData = surveyFormat(req);
        //connexion à la base de données, et insertion du survey
        connection.query(`UPDATE surveys SET ? WHERE id = ?`, [postData, postData.id], (err, results) => {
          console.log("je suis dans survey DB")
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            console.log(err);
            res.status(500).send("Erreur for updating");
          } else {
            // Si tout s'est bien passé, on envoie un statut "ok".
            //console.log(results)
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
              if(results[0]){
                const data  = results[0]
                data.questions = JSON.parse(results[0].questions);
                delete data.created_at;
                delete data.updated_at;
                console.log(data);
                res.json(data);
              } else {
                res.status(404).send("Not found");
              }
              
        }
    })
}

  // admin
exports.createOnboardingSurvey = (req, res) => {
          console.log("je suis dans post")
        const postData = surveyFormat(req);
        //connexion à la base de données, et insertion du survey
        connection.query('INSERT INTO surveys SET ?', postData, (err, results) => {
          console.log("je suis dans query")
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            console.log(err);
            res.status(500).send("Erreur");
          } else {
            // Si tout s'est bien passé, on envoie un statut "ok".
            //console.log(results)
            res.json(results);
          }
        });
}

exports.updateOnboardingSurvey = (req, res) => {
  console.log("je suis dans put de kick-off admin")
  const postData = surveyFormat(req);
  console.log(postData)
  //connexion à la base de données, et insertion du survey
  connection.query(`UPDATE surveys SET ? WHERE id = ?`, [postData, req.params.id], (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.error(".....Error with updating")
      console.log(err)
      res.status(500).send("Erreur");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      console.log("GooD update !")
      res.json(results);
    }
  });
}