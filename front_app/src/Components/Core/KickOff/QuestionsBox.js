import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Rating from "@material-ui/lab/Rating"
import Switch from "@material-ui/core/Switch";


const QuestionsBox = ({ category, questions, rateQuestion }) =>  {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  if(!questions.length) return null
  return (
      questions.map((question, questionIndex) => (
          <>
          <Box key={`${question.text}-${questionIndex}`} color="white" bgcolor="beige" p={1}>
            <Typography variant="h6">{question.text}</Typography>
            <Rating
              disabled={question.score === -1 ? true : false}
              value={!question.score ? 0 : question.score }
              name={`${question.text}-${questionIndex}`}
              onChange={(event, score) => {
                rateQuestion(category, questionIndex, score);
              }}
          />
          </Box>
          <Switch
            checked={question.score === -1 ? true : false}
            name={`${question.text}-${questionIndex}-switch`}
            onChange={(event, score) => {
              if(question.score !== -1){
                rateQuestion(category, questionIndex, -1)
              } else {
                rateQuestion(category, questionIndex, undefined)
              }
            }}
            value={question.score < 0 ? true : false}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          </>
        )
     )
  )
}

export default QuestionsBox
