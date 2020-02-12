import React from "react"
import QuestionsBox from "./QuestionsBox"
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
  root: {
    '& div.scrolable-content': {
      fontSize: '1.5em',
      textAlign: 'center'
    },




  },


}));





const OnboardingSurvey = ({
  categories,
  questions,
  setScore,
  submitSurveyConfig,
  ...rest
  }) => {
  const classes = useStyles();

  if(!questions ||!questions.length) return null
  return (
    <div className="scrolable-content">
      <form onSubmit={submitSurveyConfig} className="scrolable-content">
        {questions.map((questionsByCategory, catIndex) =>
          <div key={`${questionsByCategory}-${catIndex}ah`}>
            <h2>{categories[catIndex]}</h2>
            <QuestionsBox
              questions={questionsByCategory}
            />
          </div>
        )}
      </form>
    </div>
  )
}

export default OnboardingSurvey
