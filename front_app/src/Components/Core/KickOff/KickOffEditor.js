import React from 'react' ;
import '../../Admin/styles/BackOfficePage.css';
import InputsKickOffQuestions from "./InputsKickOffQuestions";
// import SmartButton from "./SmartButton";


import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import TextField from "@material-ui/core/TextField";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',

    '& .MuiExpansionPanel-rounded ': {
      background: 'transparent',
    },
    '& .MuiExpansionPanel-root.Mui-expanded': {
      margin: '0px 0',
      background: 'transparent',
    },
    '& .MuiExpansionPanel-root:before': {
      background: 'transparent'
    },
    '& .MuiPaper-elevation1': {
      boxShadow: 'none',
      marginBottom: '20px'
    },
    '& .MuiExpansionPanelDetails-root': {
      justifyContent: 'center',
      flexDirection: 'column',
    },
    '& .MuiExpansionPanelSummary-root p': {
      color: '#d900e9',
      fontSize: '2em',
      textTransform: 'none',
      margin: '0 auto',
      padding: 0,
    },
    '& div.makeStyles-smart-144': {
      display: 'flex',
      justifyContent: 'center',
    },
    '& form.scrolable-content': {
      fontSize: '1.5em',
      textAlign: 'center'
    },
    '&.makeStyles-smart-144 .MuiFab-root': {
      marginTop: '70px'
    },
    // '& .MuiSvgIcon-root': {
    //   fill: '#66716f'
    // },
    '& .MuiSvgIcon-root': {
      fontSize: '2.5em'
    },
    '& .MuiFormControl-fullWidth': {
      borderRadius: '5px'
    },

    '& .makeStyles-smart-144 .MuiFab-root': {
      margin: 0,
      marginTop: '70px'
    },
    '& .makeStyles-root-50 .MuiSvgIcon-root': {
      color: 'gray'
    },
    '& .path': {
      color: 'gray'
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
                style={{ margin: "20px", height: "50px", background: "beige", borderRadius: "5px ", }}
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


            // InputProps={{
            //   endAdornment: <CheckCircleOutline position="end">Kg</CheckCircleOutline >,
            // }}


          ))}
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

        </div>
      </form>
    );
  }
  export default KickOffEditor ;
