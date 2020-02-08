
import React from "react"

import Rating from "@material-ui/lab/Rating"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box/"
import QuestionsBox from "./QuestionsBox"
// import Box from '@material-ui/core/Box';

const OnboardingSurvey = ({
  categories,
  questions,
  setScore,
  submitSurveyConfig,
  ...rest
}) => {
  // console.log(questions.map(question => console.log(question)))
  return (
    <div className="scrolable-content">
      <form onSubmit={submitSurveyConfig} className="scrolable-content">
        {questions.map((questionsByCategory, catIndex) =>
          <>
            <h2>{categories[catIndex]}</h2>
            <QuestionsBox
              questions={questionsByCategory}
            />
          </>
        )}
      </form>
    </div>
  )
}

export default OnboardingSurvey
