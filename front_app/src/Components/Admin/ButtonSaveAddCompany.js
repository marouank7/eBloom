import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import {Link} from 'react-router-dom';
import { textAlign } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonSaveAddCompany() {
  const classes = useStyles();

  return (
    <div>

      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{marginLeft:"300px"}}
        startIcon={<SaveIcon style={{color:"#fafafa"}}/>}
        
      >
        {/* <Link style={{color:"#fff", textDecoration: "none",}} to="/admin/onboarding-EDITOR">
            Add Company
        </Link> */}
        <EbloomButtonNavigator style={{color:"#fff", textDecoration: "none",}} text="Add Company" url="/admin/onboarding-EDITOR"/>
      </Button>
    </div>
  );
}
