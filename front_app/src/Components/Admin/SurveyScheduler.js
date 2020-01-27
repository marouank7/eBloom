import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { AccessAlarm, ThreeDRotation, LensSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../Dashboard/Dashboard.css'
// -----------------------------------------------------
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import NavAdmin from './NavAdmin'

// const testdate = moment().add(1,'day').startOf('week').calendar()
// const dateReadyToSend = moment(moment().format('YYYY/MM/DD')).format("YYYY-MM-DD ")
// console.log("dateReadyToSend",dateReadyToSend)
// console.log("testdate", testdate)

class SurveyScheduler extends Component {
    constructor(props) {
        super(props);
        this.datum = new Date();
        this.state = {
            // moment(moment().format('YYYY/MM/DD ')).format("YYYY-MM-DD ")
            // moment().add(1,'day').startOf('week').calendar()
            //goFetch : false ,
            date : moment(this.datum).format("YYYY-MM-DD "),
            name : "firstOne",
            type : 'everyday',
            company : "Proximus",
            questions : {
                Monday : "",
                Tuesday : " ",
                Wednesday : " ",
                Thursday : " ",
                Friday : " "
            }
          }

    }//__ Constructor End

//__Life cycle

    componentDidMount() {
// console.log( moment(this.state.date).format("YYYY-MM-DD "));
        this.fetchDailySurvey();
        console.log("MOUNTING");

    }

    componentDidUpdate() {
        console.log(this.state) ;
        
    }

//__Actions

    fetchDailySurvey = () => {
        const {type, company, date} = this.state;
        const formated = moment(date).format("YYYY-MM-DD ");
        axios.get(`http://localhost:3005/surveys/today?type=${type}&company=${company}&date=${formated}`)
        .then((response) => {
            console.log("scheduler: ", response);
            this.setState({...response.data});
        })
        .catch((error) => console.log(`${error} ; Empty set of questions for this ${date} at that ${company}`))
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

    handleSubmit = () => {
        console.log(this.state, "TO BE posted")
        if(!this.state.id) {
                console.log("no id")
            axios.post("http://localhost:3005/surveys/today", this.state) //<<<<<<<<<<< aXios.POST
            .then(res => alert("Post done"))
        } else {
            console.log(this.state.id)
            axios.put("http://localhost:3005/surveys/today", this.state)
            .then(res => alert("Update done"))
        }
    }

    thisWeek = (event) => {
        this.setState({
            //goFetch : true,
            date: moment()
        })
    }

    nextWeek = (event) => {
        event.preventDefault();
        const nextWeekDate = moment(this.state.date).add(1, 'week').format('YYYY-MM-DD')
        console.log('nextweek : dateNextWeek', nextWeekDate)
        this.setState({
            //goFetch : true,
            date: new Date(nextWeekDate)
        })
    }

    lastWeek = (event) =>{
        event.preventDefault();

        const lastWeekDate = moment(this.state.date).subtract(1, 'week').format('YYYY-MM-DD')
        console.log('Last week : date Last Week', lastWeekDate)
        this.setState({
            //goFetch : true,
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
            <div className="SurveyScheduler">
                <h1 onClick={this.thisWeek}>{ "THIS WEEK"}</h1>

                <div className="container-scroll-date">
                    <ArrowBackIosIcon onClick={this.lastWeek} fontSize="large"/>

                        <p className="p-date">{`WEEK FROM ${this.returnMonday()} TO ${this.returnFriday()} `}</p>

                    <ArrowForwardIosIcon onClick={this.nextWeek} fontSize="large"/>
                </div>



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
                                value={this.state.questions.Tuesday}
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
                                value={this.state.questions.Wednesday}
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
                                value={this.state.questions.Thursday}
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
                                value={this.state.questions.Friday}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" size="large" color="primary" onClick={this.handleSubmit} className="input-submit">Send</Button>
                        </Grid>


                    </Grid>

                </form>
            </div>

         );
    }
}

export default SurveyScheduler;
