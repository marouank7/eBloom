import React from "react"
import QuestionsBox from "./QuestionsBox"
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import FormControl from '@material-ui/core/FormControl';




const useStyles = makeStyles(theme => ({
  root:{

    '& .MuiFormControl-root h4': {
      color: 'white',
    },
    '& .MuiFormControl-root': {
      width: '100%',
      background: '#aaa5b0'
    },
    '& .makeStyles-root-155 .MuiFormControl-root h4': {
      color: 'white',
      background: '#d900e9'
    },
    ' & h4.MuiTypography-root.MuiTypography-h4': {
      background: '#d900e9'
    },
    '& .MuiBox-root.MuiBox-root-169': {
      marginBottom: '140px',
    },
    '& .MuiBox-root.MuiBox-root-170': {
      marginBottom: '140px'
    },
    '& .MuiBox-root.MuiBox-root-171': {
      marginBottom: '140px'
    },
    '& .MuiTypography-h6': {
      color: 'black',
    },
    '& span.MuiRating-root': {
     color: 'none'
    },
    '& .MuiRating-root': {
      fontSize: '2.5rem'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3rem'
    },





  },

}));





const OnboardingSurvey = ({
  categories,
  questions,
  setScore,
  submitSurveyConfig,
  ...rest
  }) => {
  const classes = useStyles();

  if(!questions ||!questions.length) return null
  return (
    <>

      <CssBaseline />
      <Container fixed className={classes.root}>
        <FormControl onSubmit={submitSurveyConfig} >
          {questions.map((questionsByCategory, catIndex) => (
                <Box color="white" bgcolor="#aaa5b0" p={1}>
                  <Typography variant="h4">{categories[catIndex]}</Typography>
                  <QuestionsBox
                    questions={questionsByCategory}
                    category={catIndex}
                  />
                </Box>
              )
          )}
          <button
            type="submit"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize:"large"
            }}
          >      
            < CheckCircleOutlineIcon></CheckCircleOutlineIcon>            
          </button>
        </FormControl>
      </Container>
    </>
  );

}

export default OnboardingSurvey
