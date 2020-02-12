const connection = require('./conf');
const moment = require('moment');

exports.readWeekSurvey = (lastMondayDate, companyName, type = 'everyday') => {
       return(new Promise( (resolve) => {
          connection.query(`SELECT * FROM surveys  WHERE  type = "${type}"  AND  company =  "${companyName}"  AND  date =  "${lastMondayDate}" `, (err, results) => { 
      console.log("query WEEK survey: 7")
            if(err) {
              console.log("query : 9")
                console.log("Query Error on /surveys/today...");
              resolve(err) //.status(500).send("Query Error from server on surveys/today !");
            } else {
              //console.log("query : 13")
                if (results[0] && results != undefined) {
                  const data  = results[0]
                    //console.log("<<<<<<xx<<<");
                  data.questions = JSON.parse(results[0].questions);
                    //console.log(data, "<<<<<<<<<<<<<yyy<<<<<<<<<");
                  delete data["created_at"];
                  delete data["updated_at"];
                  resolve(data);
                }else {
                 console.log("query : 23 : empty result :")
                  resolve(undefined) ;
                }
            }
        })

      }) )
}

exports.addCompany = (req) => {
    connection.query('INSERT INTO companies SET ?',req.body, (err, results) => {
        if (err) {
          console.error("ERROR Post new company into companies table: ", err)
          return err;
        } else {
          console.log("insertion into companies: ", results)
         return results;
        }
      })
}