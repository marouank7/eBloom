import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemsAddCompany from './ItemsAddCompany';
import InputAddCompany from './InputAddCompany';
import EbloomButtonNavigator from './EbloomButtonNavigator';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// const fetchAPIlogo = name => {
//   fetch("url")
//   .then( res => show)
//   .catch(err)
// }

export default function AddCompanyModal() {
  const classes = useStyles();
  const APIlogo = "https://resize.prod.docfr.doc-media.fr/r/720,480,center-middle,ffffff,smartcrop/img/var/doctissimo/storage/images/fr/www/animaux/chat/reproduction-chat/prendre-soin-des-chatons/710503-4-fre-FR/prendre-soin-des-chatons.jpg"
  const [open, setOpen] = React.useState(false);
  const [companyName, setCompanyName] = React.useState('Which company ?');
  const [adminName, setAdminName] = React.useState('Account administrator');

  React.useEffect( () => console.log("We will api check for logo : " + companyName), [companyName]) ;


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <InputAddCompany setCompanyName={setCompanyName} setAdminName={setAdminName}/>
            <ItemsAddCompany companyName={companyName} managerName={adminName} logo={APIlogo}/>
            <EbloomButtonNavigator text="Add" url="/admin/onboarding-editor" icon/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
