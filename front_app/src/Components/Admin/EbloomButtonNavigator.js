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


export default function EbloomButtonNavigator({text, url, icon}) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{background:'#cb63e8'}}
        className={classes.button}
        startIcon={icon ? <SaveIcon /> : ''}
      >
        <Link to={url}>
          {text} 
        </Link>
      </Button>
    </div>
  );
}
