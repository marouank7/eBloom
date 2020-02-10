import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
// les fonctions déclarées en parents passent props

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        style={style}
        onClick={props => {
          if (setNewCompany) setNewCompany(dataForm);

          history.push(url);
        }
      }
      >
       {text}
      </Button>
    </div>
  );
};

export default withRouter(EbloomButtonNavigator) ;

// style={{background:'#cb63e8', lineHeight: "2", minWidth: "130px", decoration: "none"}}
