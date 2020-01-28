import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
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
        color="primary"
        size="large"
        className={classes.button}
        onClick={ setNewCompany ? (event) => setNewCompany(dataForm) : () => console.log("not now")}
        startIcon={icon ? <SaveIcon /> : ''}
      >
        <Link to={url}>
          {text} 
        </Link>
      </Button>
    </div>
  );
}
