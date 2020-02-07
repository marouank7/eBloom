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

const EbloomButtonNavigator = React.forwardRef( ({text, url, icon, style, dataForm, setNewCompany, history}, ref) => {
  const classes = useStyles();
// les fonctions déclarées en parents passent props
console.log( setNewCompany ? "Button OK": "Button NOT setNewCompany")
  return (
    <div>
      <Button ref={ref}
        variant="contained"
        color="#f5f4f4"
        size="large"
        className={classes.button}
        //onClick={ setNewCompany ? (event) => console.log("OK") : () => console.log("not now yet")}
        // startIcon={icon ? <SaveIcon /> : ''}
        style={style}
       
       onClick={props => {
        setNewCompany(dataForm);
        console.log(dataForm, "he")
        history.push(url);
       }
      }
      >
       {text}
      </Button>
    </div>
  );
});

export default withRouter(EbloomButtonNavigator) ;

// style={{background:'#cb63e8', lineHeight: "2", minWidth: "130px", decoration: "none"}}
