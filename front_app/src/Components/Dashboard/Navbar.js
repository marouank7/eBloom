import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import { AccessAlarm, ThreeDRotation, LensSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import './Dashboard.css'
// -----------------------------------------------------
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// const testdate = moment().add(1,'day').startOf('week').calendar()
// const dateReadyToSend = moment(moment().format('YYYY/MM/DD')).format("YYYY-MM-DD ")
// console.log("dateReadyToSend",dateReadyToSend)
// console.log("testdate", testdate)



class InputDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // moment(moment().format('YYYY/MM/DD ')).format("YYYY-MM-DD ")
            // moment().add(1,'day').startOf('week').calendar() 
            date : new Date(),
            name : "firstOne",
            type: 'everyday',
            customer: "Proximus",
            questions : {
                Monday : "",
                Tuesday : " ",
                Wednesday : " ",
                Thursday : " ",
                Friday : " "
            }   
          }

    }


    componentDidMount() {
       

    }

    updateField = (event) => {
        this.setState ({
            questions: {
                ...this.state.questions,
                [event.target.name] : event.target.value
            }
        });

        console.log("this.setState from updateFieldr", this.setState)
    
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     JSON.stringify(this.state)
    //     console.log(this.state)

    // }

    SubmitTest = () => {
        console.log (this.state);
        axios.post("http://localhost:3005/questionOftheWeek", this.state)
        .then(res => console.log(res))
    }

    thisWeek = (event) => {
        this.setState({
            date: moment()
        })
    }

    nextWeek = (event) => {
        event.preventDefault();
        const nextWeekDate = moment(this.state.date).add(1, 'week')
        console.log('nextweek : dateNextWeek', nextWeekDate)
        this.setState({
            date: new Date(nextWeekDate)
        })
    }

    lastWeek = (event) =>{
        event.preventDefault();

        const lastWeekDate = moment(this.state.date).subtract(1, 'week')
        console.log('Last week : date Last Week', lastWeekDate)
        this.setState({
            date: new Date(lastWeekDate)
        })
    }
        
    returnMonday = (event) => {

        const firstDay = moment(this.state.date).startOf('week').add(1, "days");
        console.log('Return monday : The begin of the week ?', firstDay.format("YYYY-MM-DD "))
        console.log('stil today in state ?', this.state.date)


        return firstDay.format("YYYY-MM-DD ");
        
    }

    returnFriday = (event) => {

        const lastDay = moment(this.state.date).endOf('week').subtract(1, "days");
        console.log('ReturnFriday : The end of the week ?', lastDay.format("YYYY-MM-DD "))

        return lastDay.format("YYYY-MM-DD ");
        
    }
 
    
    render() { 
        const { date } = this.state;
        
        return ( 
            <>

                <AppBar position="static">
                        <Toolbar>
                            <h1 onClick={this.thisWeek}>{ "THIS WEEK"}</h1>

                            <div className="container-scroll-date">
                                <ArrowBackIosIcon onClick={this.lastWeek} fontSize="large"/>

                                    <p className="p-date">{`WEEK FROM ${this.returnMonday()} TO ${this.returnFriday()} `}</p> 

                                <ArrowForwardIosIcon onClick={this.nextWeek} fontSize="large"/>
                            </div>
                            

                        </Toolbar>
                </AppBar>               
            
                <form  noValidate autoComplete="off" className="form-questions">
                    <Grid container spacing={1}> 
                        <Grid item xs={12} >
                            <TextField 
                                id="Monday" 
                                label="Monday" 
                                variant="outlined"
                                alignContent='flex-start'
                                name="Monday"
                                onChange={this.updateField}
                                className="input"
                                value={this.state.questions.Monday}
                        
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="Tuesday" 
                                label="Tuesday" 
                                variant="outlined"
                                alignContent='flex-start'
                                name="Tuesday"
                                onChange={this.updateField}
                                className="input"
                            />
                        </Grid>  
                        <Grid item xs={12}>
                            <TextField 
                                id="Wednesday" 
                                label="Wednesday" 
                                variant="outlined"
                                alignContent='flex-start'
                                name="Wednesday"
                                onChange={this.updateField}
                                className="input"
                            />
                        </Grid>  
                        <Grid item xs={12}>
                            <TextField 
                                id="Thursday" 
                                label="Thursday" 
                                variant="outlined"
                                alignContent='flex-start'
                                name="Thursday"
                                onChange={this.updateField}
                                className="input"
                            />
                        </Grid>  
                        <Grid item xs={12}>
                            <TextField 
                                id="Friday" 
                                label="Friday" 
                                variant="outlined"
                                alignContent='flex-start'
                                name="Friday"
                                onChange={this.updateField}
                                className="input"
                            />
                        </Grid> 
                        <Grid item xs={12}>
                            <Button variant="contained" size="large" color="primary" onClick={this.SubmitTest} className="input-submit">Send</Button>
                        </Grid>  
                        
                        
                    </Grid>

                </form>
            </>
            
         );
    }
}
 
export default InputDashboard;


