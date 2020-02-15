const connection = require('./conf');
const moment = require('moment');

exports.readWeekSurvey = (lastMondayDate, companyName, type = 'everyday') => {
       return(new Promise( (resolve) => {
          connection.query(`SELECT * FROM surveys  WHERE  type = "${type}"  AND  company =  "${companyName}"  AND  date =  "${lastMondayDate}" `, (err, results) => {
            if(err) {
              resolve(err) //.status(500).send("Query Error from server on surveys/today !");
            } else {
                if (results[0] && results != undefined) {
                  const data  = results[0]
                  data.questions = JSON.parse(results[0].questions);
                  delete data["created_at"];
                  delete data["updated_at"];
                  resolve(data);
                }else {
                  resolve(undefined) ;
                }
            }
        })

      }) )
}

exports.addCompany = (req) => {
    connection.query('INSERT INTO companies SET ?',req.body, (err, results) => {
        if (err) {
          return err;
        } else {
         return results;
        }
      })
}
