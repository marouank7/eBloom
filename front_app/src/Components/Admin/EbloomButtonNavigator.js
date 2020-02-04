import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const EbloomButtonNavigator = React.forwardRef( ({text, url, icon, dataForm, setNewCompany}, ref) => {
  const classes = useStyles();
  console.log(setNewCompany? "we can set a new comp " : "impossible to set a new comp");
// les fonctions déclarées en parents passent props
  return (
    <div>
      <Button ref={ref}
        variant="contained"
        color="#f5f4f4"
        size="large"
        style={{background:'#cb63e8', lineHeight: "2", minWidth: "130px"}}
        className={classes.button}
        onClick={ setNewCompany ? (event) => setNewCompany(dataForm) : () => console.log("not now")}
        startIcon={icon ? <SaveIcon /> : ''}
      >
        <Link style={{color: "white"}} to={url}>
          {text} 
        </Link>
      </Button>
    </div>
  );
});
export default EbloomButtonNavigator ;
