import React from "react"
import SmartButton from "./SmartButton"


const InputsKickOffQuestions = ({
  category,
  questions,
  addQuestion,
  editQuestion,
  removeQuestion
}) => {
  if(!questions.length) return (
        <SmartButton handleClick={() => addQuestion(category)} />
      );
  return (
    <div className="back-off-question" /*className="inputs-container"*/ >
      {questions.map((question, questionIndex) => (
        <div key={`${question.track}-${questionIndex}`}>
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
      <SmartButton handleClick={() => addQuestion(category)} />

    </div>
  )
}
export default InputsKickOffQuestions ;
