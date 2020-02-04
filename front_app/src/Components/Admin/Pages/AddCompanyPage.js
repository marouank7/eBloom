import React, { Component } from 'react';
import AddCompanyModal from '../AddCompanyModal';
import AdminLoginHeader from '../Layouts/AdminLoginHeader';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
    modal: {
        '& div': {
            justifyContent: 'center',
            display: 'flex',
            padding: '160px'
        },
        '& .MuiFab-root': {
            width: '100px',
            height: '100px'  
        },
        '& .MuiFab-primary': {
            background: '#cb63e8'
        },
        '& path': {
            color: '#fff'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '3.5rem'
        }

    },
});


export default function AddCompanyPage() {
    const classes = useStyles();

    return (
            
        <div className="pages-admin-login">
            <AdminLoginHeader/>
            <div className={classes.modal}>
                <AddCompanyModal/>    
            </div>
        </div>

    );
}

