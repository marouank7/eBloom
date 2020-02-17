import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CompanyList from '../Modules/CompanyList'
import HeaderAdmin from './HeaderAdmin'
import AddCompanyModal from '../Modules/AddCompanyModal'


const useStyles = makeStyles({
  list: {
    width: 250,
    height: "10px"
  },
  fullList: {
    width: 'auto',
    height: "10px"
  },
  drawer: {
    '& .MuiDrawer-paper': {
      top: '100px',
      height: '570px',
      background: '#e9bbf5',
      borderRadius: '15px',
      '& ul': {
        background: '#e9bbf5'
      },
      '& div': {
        display: 'flex',
        justifyContent: 'center',
      }
    }
  },
});

 const DisplayAdminView = ({ children, getAllCompanies, ...rest } ) => {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      //onClick={toggleDrawer(side, false)} // <<<<<<<<<<<<< when open set to false (by clicking on AddCompanyModal which triggers onClick) : it is read by AddCompanyModal as well, and triggers onClose.
     // onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <CompanyList {...rest}/>
        <AddCompanyModal {...rest}/>
      </List>
      <Divider />

    </div>
  );

let data = {...rest}
let { company } = data
  useEffect(() => getAllCompanies(), []);
  return (
    <div className="pages-admin-login">
      <HeaderAdmin toggleDrawer={() => toggleDrawer('left', true)}/>
      <Button className="logoEbloomDashboard" onClick={toggleDrawer('left', true)}/>

      <SwipeableDrawer
        className={classes.drawer}

        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}

      >
        {sideList('left')}
      </SwipeableDrawer>
      <SwipeableDrawer
        className={classes.drawer}
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>

        {children}
    </div>
  );
} ;
export default DisplayAdminView ;
