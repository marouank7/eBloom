
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
      res.status(500).send("Erreur for creating new company");
    } else {
      res.status(200);
      res.json(results);
    }
  })

};
exports.findAllcompanies = (req, res) => {
  connection.query('SELECT name, administrator, logo, id FROM companies', (err, results) => {
    if(err) {
     res.status(500).send("Error acces : Cannot query company list !", err);
    } else {
      res.json(results);
    }
  })
}

//__ Ressource : answers
exports.createAnswer = (req, res) => {
    const { questions, ...rest } = req.body;
    if(questions) {
      // Bulk insert
      const datas = questions.flat()

      sqlBulk = datas.map( object => {
        let raw = {
          ...object,
          ...rest
        }
        return Object.values(raw)
      })


      const sql = "INSERT INTO feedbacks (question, score, category, type, company, date, survey_id) VALUES ?";
      connection.query(sql, [sqlBulk], (err, results) => {
        if (err) {
          res.status(500).send("Erreur");
        } else {
          // Si tout s'est bien passé, on envoie un statut "ok".
          res.json(results[0]);
        }
      });
    } else {
      connection.query('INSERT INTO feedbacks SET ?', req.body, (err, results) => {
        if (err) {
          // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
          res.status(500).send("Erreur");
        } else {
          // Si tout s'est bien passé, on envoie un statut "ok".
          res.json(results);
        }
      });

    }


}

//__ Ressource : daily survey

async function findWeekSurvey(req, res) { //async
    const type = req.query.type ;
    const companyName = req.query.company ;
    const day = req.query.day ;
    let currencyTime = "";
    let forTodayOnly = false ;

    if(type.toLowerCase() ==="everyday" && companyName ) {
        if (req.query.date || day) {
            currencyTime = req.query.date ; //In order to get the previous Monday from this date
            if(day) forTodayOnly = true ;
        } else {
            currencyTime = new Date() ; // In order to get the Monday date of this week
            forTodayOnly = true ;
        }
    } else res.status(400).send("Request error from client : unconsistent query data either about type or company !") ;
    const lastMondayTime = moment(currencyTime).startOf('week').add(1, "days");
    const lastMondayDate = lastMondayTime.format("YYYY-MM-DD") ;
    let result = {} ;
    try {
        // inTable_____ from Ebloom DB
        result = await inTable.readWeekSurvey(lastMondayDate, companyName)  //await
        if(result) {
          if (!forTodayOnly) { res.json(result) }
          else {
              const survey_id = result.id ; //========================================================== lASt addon on this function.
              // Get day name from the starting time of the survey compared to now .
              const days = ["Monday","Tuesday","Wednesday", "Thursday", "Friday"];
              const  a = moment(currencyTime);
              const  b = moment(lastMondayTime);
              const daysIndex = a.diff(b, 'days') ;
              const dayAsked = day ? day : days[daysIndex] ; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< if day as query input, so that day question is retrun
              const todayQuestion = result.questions.filter( (Q) => Q.day == dayAsked )
              todayQuestion[1] = survey_id ;
               if(todayQuestion[0].length < 1 ) {res.status(404).send("No survey scheduled yet") }
              else {res.json(todayQuestion);}
          }
        } else {
          res.status(404).send("Not found");
        }
    } catch (error) {

        // envoi erreur depuis model ??
    }
}
exports.findWeekSurvey = findWeekSurvey ;


exports.createWeekSurvey = (req, res) => {
      const postData = surveyFormat(req) ;
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
}
// both need a common function to cut off unreadable redundancy
exports.updateWeekSurvey = (req, res) => {
        const postData = surveyFormat(req);
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
}

//__ Ressource : kick-off survey

  // employee || admin
exports.findOnboardingSurvey = (companyName, req, res) => {
      // connection to the database, and selection of employees
      connection.query(`SELECT * FROM surveys  WHERE  type = "Onboarding"  AND  company = "${companyName}" ORDER BY created_at DESC`, (err, results) => {
        if (err) {
          //  If an error has occurred, then the user is informed of the error
          res.status(500).send('Query Error on /onboarding/' + companyName);
        } else {
              if(results[0]){
                const data  = results[0]
                data.questions = JSON.parse(results[0].questions);
                delete data.created_at;
                delete data.updated_at;
                     console.log(data, data.questions);
                res.json(data);
              } else {
                res.status(404).send("Not found");
              }

        }
    })
}

  // admin
exports.createOnboardingSurvey = (req, res) => {
        const postData = surveyFormat(req);
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
}

exports.updateOnboardingSurvey = (req, res) => {
  const postData = surveyFormat(req);
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
}
