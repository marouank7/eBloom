import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Rating from "@material-ui/lab/Rating"


const QuestionsBox = ({ questions, title, setScore }) =>  {
  if(!questions.length) return null
  return (
      questions.map((question, index) => {
        return (
          <Box key={`${question.text}-${index}`} component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{question.text}</Typography>
            <Rating
              name="simple-controlled"
              value={question.score}
              onChange={(event, newValue) => {
              setScore(newValue)
              }}
            />
          </Box>
        )
      })
  )
}

export default QuestionsBox


// questionsByCategory.map((question, questionIndex) => (
//   <div className="container" key={catIndex + questionIndex}>
//     <Box component="fieldset" mb={3} borderColor="transparent">
//       <Typography component="legend">{question.text}</Typography>
//       <Rating
//         name="simple-controlled"
//         value={question.score}
//         onChange={(event, newValue) => {
//
//           setScore(newValue)
//         }}
//       />
//     </Box>
//   </div>
