import React from "react"

const InputsSurveyQuestions = ({
  category,
  questions,
  addQuestion,
  editQuestion,
  removeQuestion
}) => {
  if(!questions.length) return null;
  return (
<<<<<<< HEAD:front_app/src/Components/Admin/InputsKickOffQuestions.js
    <div className="back-off-question" /*className="inputs-container"*/ >
=======
    <div className="inputs-container">
>>>>>>> 0e61db3e53acde32795436b54410521650cf883c:front_app/src/Components/Core/InputsSurveyQuestions.js
      {questions.map((question, questionIndex) => (
        <div className="parent" key={questionIndex + category}>
          <input
            value={question.text}
            id={question.track}
            onChange={e =>
              editQuestion(category, questionIndex, e.target.value)
            }
          />
          <button
            type="button"
            onClick={() => removeQuestion(category, questionIndex)}
          >
            -
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addQuestion(category)}>
        ADD QUESTION
      </button>
    </div>
  )
}

export default InputsSurveyQuestions
