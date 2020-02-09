import React from "react"
import QuestionsBox from "./QuestionsBox"

const OnboardingSurvey = ({
  categories,
  questions,
  setScore,
  submitSurveyConfig,
  ...rest
}) => {
  //
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
