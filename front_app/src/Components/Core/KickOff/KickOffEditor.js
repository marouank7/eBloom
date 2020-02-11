import React from 'react' ;
import '../../Admin/styles/BackOfficePage.css';
import InputsKickOffQuestions from "./InputsKickOffQuestions";
// import SmartButton from "./SmartButton"


import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '& .MuiExpansionPanel-rounded ': {
      background: 'inherit'
    },
    '& .MuiExpansionPanel-root.Mui-expanded': {
      margin: '100px 0',
      background: 'inherit',
    },
    '& .MuiPaper-elevation1': {
      boxShadow: 'none',
      marginBottom: '100px'
    },
    '& .MuiExpansionPanelDetails-root': {
      justifyContent: 'center',
      flexDirection: 'column'
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    width: 200,
    
  },
}));


const KickOffEditor = ({
    categories,
    questions, // un array d'ensembles questions (array) par categ
    submitSurveyConfig,
    fetchKickOff,
    ...rest
  }) => {
    const classes = useStyles();

    if(!categories.length && !questions) return null
    return (
      <form onSubmit={submitSurveyConfig}>
        <div className={classes.root}>
          {categories.map((byCategory, catIndex) => (
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ margin: "20px", height: "50px", background: "#bdbdbd",  }}
              >
              <Typography className={classes.heading}>{categories[catIndex]}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails 
              >
              <InputsKickOffQuestions
                {...rest}
                category={catIndex}
                questions={questions[catIndex]}
              />

            </ExpansionPanelDetails>

            </ExpansionPanel>
          ))}
          <button type="submit">update</button>

        </div>
      </form>
    );
  }
  export default KickOffEditor ;
