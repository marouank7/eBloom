import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Rating from "@material-ui/lab/Rating"
import Switch from "@material-ui/core/Switch";


const QuestionsBox = ({ questions, title, setScore }) =>  {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  if(!questions.length) return null
  return (
      questions.map((question, index) => (
          <>
          <Box key={`${question.text}-${index}`} color="white" bgcolor="#aaa5b0" p={1}>
            <Typography variant="h6">{question.text}</Typography>
            <Rating name="simple-controlled" />
          </Box>
          <Switch
            checked={state.checkedB}
            onChange={handleChange("checkedB")}
            value="checkedB"
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          </>
        )
      )
  )
}

export default QuestionsBox
