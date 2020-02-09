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



class SurveyScheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // moment(moment().format('YYYY/MM/DD ')).format("YYYY-MM-DD ")
            // moment().add(1,'day').startOf('week').calendar()
            //goFetch : false ,
            date : new Date(),
            name : "firstOne",
            type : 'everyday',
            company : "Proximus",
            questions : {
                Monday : "",
                Tuesday : "",
                Wednesday : "",
                Thursday : "",
                Friday : ""
            }
          }

    }//__ Constructor End

//__Life cycle

    componentDidMount() {
//
        this.fetchDailySurvey();


    }

    componentDidUpdate() {

    }

//__Actions

    fetchDailySurvey = () => {
        const {type, company, date} = this.state;
        const formated = moment(date).format("YYYY-MM-DD ");
        axios.get(`http://localhost:3005/surveys/today?type=${type}&company=${company}&date=${formated}`)
        .then((response) => {

            this.setState({...response.data});
        })
        .catch((error) => {})
    }

    updateField = (event) => {
        this.setState ({
            questions: {
                ...this.state.questions,
                [event.target.name] : event.target.value
            }
        });



    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     JSON.stringify(this.state)
    //

    // }

    handleSubmit = () => {

        if(!this.state.id) {

            axios.post("http://localhost:3005/surveys/today", this.state) //<<<<<<<<<<< aXios.POST
            .then(res => {})
        } else {

            axios.put("http://localhost:3005/surveys/today", this.state)
            .then(res => {})
        }
    }

    thisWeek = (event) => {
        this.setState({date: moment()}, () =>  this.fetchDailySurvey())
    }

    nextWeek = (event) => {
        event.preventDefault();
        const nextWeekDate = moment(this.state.date).add(1, 'week').format('YYYY-MM-DD')

        this.setState({date: new Date(nextWeekDate)}, () =>  this.fetchDailySurvey())
    }

    lastWeek = (event) =>{
        event.preventDefault();

        const lastWeekDate = moment(this.state.date).subtract(1, 'week').format('YYYY-MM-DD')

        this.setState({date: new Date(lastWeekDate)}, () =>  this.fetchDailySurvey())
    }

    returnMonday = (event) => {

        const firstDay = moment(this.state.date).startOf('week').add(1, "days");




        return firstDay.format("YYYY-MM-DD ");

    }

    returnFriday = (event) => {

        const lastDay = moment(this.state.date).endOf('week').subtract(1, "days");


        return lastDay.format("YYYY-MM-DD ");

    }


    render() {
        const { classes } = this.props;

        return (
            <div className="SurveyScheduler">
                <h1 style={{color: "white"}} onClick={this.thisWeek}>{ "THIS WEEK"}</h1>

                <div className="container-scroll-date">
                    <ArrowBackIosIcon onClick={this.lastWeek} fontSize="large"/>

                        <p style={{color: "white"}} className="p-date">{`WEEK FROM ${this.returnMonday()} TO ${this.returnFriday()} `}</p>

                    <ArrowForwardIosIcon onClick={this.nextWeek} fontSize="large"/>
                </div>



                <form  noValidate autoComplete="off" className="form-questions">
                    <Grid container spacing={1}>
                        <Grid item xs={12} >
                            <TextField
                                id="Monday"
                                label="Monday"
                                variant="outlined"
                                aligncontent='flex-start'
                                name="Monday"
                                onChange={this.updateField}
                                className="input"
                                value={this.state.questions.Monday}
                                style={{background: 'white'}}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="Tuesday"
                                label="Tuesday"
                                variant="outlined"
                                aligncontent='flex-start'
                                name="Tuesday"
                                onChange={this.updateField}
                                className="input"
                                value={this.state.questions.Tuesday}
                                style={{background: 'white'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="Wednesday"
                                label="Wednesday"
                                variant="outlined"
                                aligncontent='flex-start'
                                name="Wednesday"
                                onChange={this.updateField}
                                className="input"
                                value={this.state.questions.Wednesday}
                                style={{background: 'white'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="Thursday"
                                label="Thursday"
                                variant="outlined"
                                aligncontent='flex-start'
                                name="Thursday"
                                onChange={this.updateField}
                                className="input"
                                value={this.state.questions.Thursday}
                                style={{background: 'white'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="Friday"
                                label="Friday"
                                variant="outlined"
                                aligncontent='flex-start'
                                name="Friday"
                                onChange={this.updateField}
                                className="input"
                                value={this.state.questions.Friday}
                                style={{background: 'white'}}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                size="large"
                                // color="primary"
                                onClick={this.handleSubmit}
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
            </div>
         );
    }
}

export default withStyles(styles)(SurveyScheduler);
