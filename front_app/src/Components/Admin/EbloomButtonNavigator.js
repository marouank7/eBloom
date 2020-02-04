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

export default function EbloomButtonNavigator({text, url, icon, dataForm, setNewCompany}) {
  const classes = useStyles();
  console.log(setNewCompany);

  return (
    <div>
      <Button
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
}
