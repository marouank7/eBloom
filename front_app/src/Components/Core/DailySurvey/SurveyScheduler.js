import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../../Admin/styles/Dashboard.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core';
import CategInput from './CategInput';

const styles = {
    root: {
        // '& .MuiButton-label': {
        //     color: 'white',
        // },
        '& .MuiFormLabel-root.Mui-focused': {
            color: 'white',
        },
        '&.input': {
            backgroundColor: '#eae5e5'
        },
    }
}

const SurveyScheduler = ({
        classes,
        thisWeek,
        nextWeek,
        lastWeek,
        returnMonday,
        returnFriday,
        updateField,
        setCategory,
        questions,
        handleSubmit  //  <div style={{"dipslay" : "flex" , "flex-direction" : "row" , }}>
      })  => {
          const weekDays = Object.keys(questions);
          console.log("WEEKdays 40 : ", weekDays) ;
          return(
              <div className="SurveyScheduler">
                  <h1 style={{color: "white"}} onClick={thisWeek}>{ "THIS WEEK"}</h1>
                  <div className="container-scroll-date">
                      <ArrowBackIosIcon onClick={lastWeek} fontSize="large"/>
                          <p style={{color: "white"}} className="p-date">{`WEEK FROM ${returnMonday()} TO ${returnFriday()} `}</p>
                      <ArrowForwardIosIcon onClick={nextWeek} fontSize="large"/>
                  </div>
                  <form  noValidate autoComplete="off" className="form-questions">
                     
                      <Grid container spacing={1}>
  {/*                        {setTimeout( () =>   */}
{weekDays.map((day) => {
    console.log(day)
    const content = questions[day].text || questions[day] ;
    const categ = questions[day].category || "Category" ; //for CategInput
    return(
        <>
            <Grid item xs={9} direction="row" style={{"flex-grow" : "3"}}>
                <TextField
                    id={day}
                    label={day}
                    variant="outlined"
                    aligncontent='flex-start'
                    name={day}
                    onChange={updateField}
                    className="input"
                    value={content}
                    style={{background: 'white', overflow:'hidden', 'border-radius':"4px", width:"100%"}}
                />
            </Grid>
            <CategInput currentDay={day}  category={categ} setCategory={setCategory} /> 
        </>
    )}
)}
{/*                        , 2000)} */}
                        
                          <Grid item xs={12}>
                              <Button
                                  variant="contained"
                                  size="large"
                                  // color="primary"
                                  onClick={handleSubmit}
                                  className="input-submit"
                                  style={{background: "#cb63e8"}}
                                  classes={{
                                      root: classes.root
                                  }}
                                  >

                                  Send

                              </Button>
                          </Grid>

                      </Grid>

                  </form>
              </div>);
}


export default withStyles(styles)(SurveyScheduler);
