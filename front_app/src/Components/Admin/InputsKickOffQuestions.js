import React from "react"

const InputsKickOffQuestions = ({
  category,
  questions,
  addQuestion,
  editQuestion,
  removeQuestion
}) => {
  if(!questions.length) return null;
  return (
    <div className="back-off-question" /*className="inputs-container"*/ >
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
export default InputsKickOffQuestions ;