import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import SaveIcon from '@material-ui/icons/Save';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    '& .MuiButton-label': {
      color: 'white'
    }
  }
}));

const EbloomButtonNavigator = ({text, url, icon, style, dataForm, setNewCompany, history}) => {
  const classes = useStyles();
  console.log(setNewCompany);

  return (
    <div>
      <Button
        variant="contained"
        color="#f5f4f4"
        size="large"
        className={classes.button}
        onClick={ setNewCompany ? (event) => setNewCompany(dataForm) : () => console.log("not now")}
        // startIcon={icon ? <SaveIcon /> : ''}
        style={style}
        onClick={props => history.push(url)}
      >
       {text}
      </Button>
    </div>
  );
}

export default withRouter(EbloomButtonNavigator)

// style={{background:'#cb63e8', lineHeight: "2", minWidth: "130px", decoration: "none"}}