import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemsAddCompany from './ItemsAddCompany';
import InputAddCompany from './InputAddCompany';
import EbloomButtonNavigator from '../../Core/EbloomButtonNavigator';
import { flexbox } from '@material-ui/system';
import Fade from '@material-ui/core/Fade';

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


export default function AddCompanyModal(props) {
  //console.log(props.setNewCompany, "check 1")
  const classes = useStyles();
  const logoStart = "" ///<<<<<<<<<<<<<<<<<<<<<<<<< add local ebloom logo.

  const [open, setOpen] = React.useState(false);
  const [companyName, setCompanyName] = React.useState('Which company ?');
  const [adminName, setAdminName] = React.useState('Account administrator');
  const [APIlogo, setAPIlogo] = React.useState(logoStart);
  //newCompanySetter({name : companyName, admin : adminName, logo: APIlogo});
  React.useEffect( () => setAPIlogo(`https://logo.clearbit.com/${companyName}.com`), [companyName]) ;


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ref = React.createRef();

  console.log( props.setNewCompany ? "AddcompanyMODAL OK": "AddcompanyMODAL NOT setNewCompany")
  return (
    <div>

      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-descriptmanager/dashboardon"
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
            <div style= {{display:"flex", justifyContent:"center"}}>
              <EbloomButtonNavigator ref={ref}
                style={{backgroundColor:'#cb63e8', color: 'white'}}
                text="Add company"
                url="/admin/onboarding-editor"
                dataForm ={{
                    name : companyName,
                    administrator : adminName,
                    logo : APIlogo
                }}
                setNewCompany={props.setNewCompany}
                {...props}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
