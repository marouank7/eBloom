import React from "react"
import SmartButton from "./SmartButton"
import TextField from '@material-ui/core/TextField';
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";


const InputsKickOffQuestions = ({
  category,
  questions,
  addQuestion,
  editQuestion,
  removeQuestion
}) => {

  
  if(!questions) return (
        <SmartButton handleClick={() => addQuestion(category)} />
      );
  return (
    <>
      {questions.map((question, questionIndex) => (

        <>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            value={question.text}
            onChange={e => editQuestion(category, questionIndex, e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <button
            type="button"
            onClick={() => removeQuestion(category, questionIndex)}
           >
            -
          </button>
        </>
      ))}
        
        <SmartButton handleClick={() => addQuestion(category)} />

      </>
  )
}
export default InputsKickOffQuestions ;
