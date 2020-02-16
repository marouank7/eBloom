import React from "react"
import SmartButton from "./SmartButton"
import TextField from '@material-ui/core/TextField';
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import { makeStyles } from "@material-ui/styles";
import Clear from '@material-ui/icons/Clear';




const InputsKickOffQuestions = ({
  category,
  questions,
  addQuestion,
  editQuestion,
  removeQuestion
  }) => {

  if(!questions || !questions.length) return (
        <SmartButton handleClick={() => addQuestion(category)} />
      );
  return (
    <>
      {questions.map((question, questionIndex) => (

        <>
          <TextField
            id="outlined-full-width"
            // style={{ margin: 8 }}
            placeholder="Enter your question"
            style={{ background: "#bdbdbd", }}
            value={question.text}
            onChange={e => editQuestion(category, questionIndex, e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"


            InputProps={{
              endAdornment: <Clear onClick={() => removeQuestion(category, questionIndex)} position="end">Kg</Clear >,

          }}



          />
          {/* <button
            type="button"

          >
            -
          </button> */}
        </>
      ))}

        <SmartButton handleClick={() => addQuestion(category)} />

      </>
  )
}
export default InputsKickOffQuestions ;
