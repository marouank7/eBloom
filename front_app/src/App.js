import React, { Component } from 'react';
import './App.css';
import KickOffPage from './Components/Employee/Pages/KickOffPage';
import DailySurvey from './Components/Core/DailySurvey/DailySurvey';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import moment from 'moment';
import axios from 'axios';

import AdminLoginPage from './Components/Admin/Pages/AdminLoginPage'
import AddCompanyPage from './Components/Admin/Pages/AddCompanyPage'
import DashboardPage from './Components/Admin/Pages/DashboardPage';
import OnBoardingEditorPage from './Components/Admin/Pages/OnBoardingEditorPage'
import WeeklyEditorPage from './Components/Admin/Pages/WeeklyEditorPage'

import LoginManagerPage from './Components/Manager/Pages/LoginManagerPage'
import ManagerDashboard from './Components/Manager/Pages/ManagerDashboard'

class App extends Component {

  constructor(props) {
    super(props);

    this.categories = ["Individual", "Team", "Company"]
    this.URLServer = 'http://localhost:3005'
    this.state = {
      companies : [],
      type : '',
      company : 'Proximus',
      date: moment().format("YYYY-MM-DD"),
      name: "Draft",
      categories : this.categories,
      questions:  this.categories.map(() => [])
    };


  }

//__ Ressource : daily survey 

  setNewCompany = (dataSet) => {
    //event.preventDefault()
    //console.log(dataSet, "in setNewCompany");
    axios.post(`${this.URLServer}/companies`, dataSet).then( res => {
      //console.log(" got post answer: ", res)
        const listUp = [...this.state.companies, {...dataSet}];
        const {companies, ...rest} = this.state ;
        this.setState({
          ...rest,
          companies : listUp,
          company : dataSet.name
        });
    })
  }
  getAllCompanies = () => {
    axios.get(`${this.URLServer}/companies`)
    .then( res => 
      {console.log("LOAD LIST companies: ", res)
      this.setState({ companies : res.data})}
      )
  // setNewCompany = (dataSet) => {
  //   //event.preventDefault()

  //   const listUp = [...this.state.companies, {...dataSet}];
  //   const {id, ...rest} = this.state

  //   this.setState({
  //     ...rest,
  //     id: undefined, //
  //     companies: listUp,
  //     company: dataSet.name,
  //   });
 }

  fetchDailySurvey = () => {
      // this.setState(this.WeekEditorState);
      const { company, date } = this.state;
      const type = 'Everyday';
      const formated = moment(date).format("YYYY-MM-DD");

      axios.get(`http://localhost:3005/surveys/today?type=${type}&company=${company}&date=${formated}`)
      .then((response) => {
        if(response.data) {
          this.setState({...response.data});
        }
        else {
          const { id, ...rest } = this.state
          this.setState({
            id: undefined,
            ...rest,
            ...this.WeekEditorState()
          },  () => console.log('the app state : ', this.state) ); // Remove only when you can choose (from sreenview & clicking) the company survey to display !
        }
      })
      .catch((error) => {
        this.setState(this.WeekEditorState(), () => console.log('the app state : ', this.state)); // Remove only when you can choose (from sreenview & clicking) the company survey to display !
      })
  }

    // employee || admin
  fetchKickOff = (company) => {
    axios.get(`${this.URLServer}/surveys/onboarding/${company}`)
    .then((response) => {
        //handle successles
        console.log(response) ;
        const { data } = response;
        if(data) {
          this.setState(
              {...data}
          )
        } else {
          this.setState(this.KickOffEditorState())
        }
    })
    .catch((error) => {
        this.setState(this.KickOffEditorState())
        // handle error

    })
    .finally(() => {
        // always executed
    })
  }

    // employee
  editAnswer = () => (coordonates, text, answer) => {
    const [category, question] = coordonates
    const { questions } = this.state
    questions[category][question] = { text , answer }
    this.setState({ questions })
  }
    // admin
  addQuestion = category => {
    const { questions } = this.state
    questions[category] = [...questions[category], { text: "" }]

    this.setState({ questions })
  }
  editQuestion = (category, question, text) => {
    const { questions } = this.state
    questions[category][question] = { text }

    this.setState({ questions })
  }
  removeQuestion = (category, questionIndex) => {
    const { questions } = this.state
    questions[category] = questions[category].filter(
      (el, index) => index !== questionIndex
    )

    this.setState({ questions })
  }

  submitSurveyConfig = (event, whichSurvey ) => {
    event.preventDefault() ;
    // this.setState({type: whichSurvey})

    const {companies, categories, id, ...rest} = this.state
    if(this.state.id) {
      axios.put(`${this.URLServer}/surveys/${this.state.id}`, {...rest})
    } else {
      axios.post(`${this.URLServer}/surveys`, {...rest})
           .then(({data}) => {
              this.setState({id: data.insertId})
            })
    }
  }

  KickOffEditorState = () => ({
    type: 'Onboarding',
    date: moment().format("YYYY-MM-DD"),
    name: `KickOff config of ${this.state.company}`,
    questions:  this.categories.map(() => [])
  })

  WeekEditorState = () => ({
    id: null,
    type: 'Everyday',
    date: moment(this.state.date).format("YYYY-MM-DD"),
    name: `WEEK FROM ${this.returnMonday()} TO ${this.returnFriday()}`,
    questions : {
        Monday : "",
        Tuesday : "",
        Wednesday : "",
        Thursday : "",
        Friday : ""
    }
  })

  updateField = (event) => {
      this.setState ({
          questions: {
              ...this.state.questions,
              [event.target.name] : event.target.value
          }
      });
  }

  handleSubmit = () => {
      if(!this.state.id) {
          const { categories, id, companies, ...rest } = this.state

          axios.post("http://localhost:3005/surveys/today", {...rest})
          .then(res => {
            this.setState({id: res.data.insertId})
          })
      } else {
          const { categories, companies, ...rest } = this.state
          axios.put("http://localhost:3005/surveys/today", {...rest})
          .then(res => {
          })
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

      return firstDay.format("YYYY-MM-DD");
  }

  returnFriday = (event) => {
      const lastDay = moment(this.state.date).endOf('week').subtract(1, "days");

      return lastDay.format("YYYY-MM-DD");
  }


  componentDidUpdate() {

  }

  componentDidMount() {
  //  this.setState({questions: this.categories.map(()=> [])});

  }

  render() {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (<AddCompanyPage {...props} setNewCompany={this.setNewCompany}/>) }

                // render={props => ( <HomePage/> )}
              />
              <Route
                path="/employee/onboarding"
                render={props => {
                  return (<KickOffPage
                      editAnswer={this.editAnswer}
                      fetchKickOff={this.fetchKickOff}
                      kickOff={this.state}
                      company={this.state.company}/>)
                }}
              />
              <Route
                exact
                path="/employee/today"
                render={props => (<DailySurvey/>) }
              />
              <Route
                exact
                path="/admin"
                render={props => (<AdminLoginPage {...props} />) }
              />
              <Route
                exact
                path="/admin/addcompany"
                render={props => (<AddCompanyPage {...props} setNewCompany={this.setNewCompany}/>) }
              />
              <Route
                exact
                path="/admin/dashboard"
                render={props => 
                          (<DashboardPage  {...props} 
                             getAllCompanies ={this.getAllCompanies}
                             companies={this.state.companies} 
                             setNewCompany={this.setNewCompany}/>) }
              />
              <Route
                exact
                path="/admin/onboarding-editor"
                render={props => {
                  return (<OnBoardingEditorPage {...props}
                                getAllCompanies ={this.getAllCompanies}
                              companies={this.state.companies}
                              company={this.state.company}
                                setNewCompany={this.setNewCompany}
                                fetchKickOff={this.fetchKickOff}
                              categories={this.state.categories}
                              questions={this.state.questions}
                                fetchKickOff={this.fetchKickOff}
                              addQuestion={this.addQuestion}
                              editQuestion={this.editQuestion}
                              removeQuestion={this.removeQuestion}
                                submitSurveyConfig={this.submitSurveyConfig} />)
                }}
              />
              <Route
                exact
                path="/admin/weekly-editor"
                render={props => {
                  // if(this.state.type !== 'Everyday') this.setState({
                  //   type: "Everyday",
                  //   name: `WEEK FROM ${this.returnMonday()} TO ${this.returnFriday()} `
                  // });

                  return(<WeeklyEditorPage {...props}
                                getAllCompanies ={this.getAllCompanies}
                              companies={this.state.companies}
                                setNewCompany={this.setNewCompany}
                              thisWeek={this.thisWeek}
                              nextWeek={this.nextWeek}
                              lastWeek={this.lastWeek}
                              returnMonday={this.returnMonday}
                              returnFriday={this.returnFriday}
                              questions={this.state.questions}
                                handleSubmit={this.handleSubmit}
                                fetchDailySurvey = {this.fetchDailySurvey}
                                updateField={this.updateField}
                         />)

                }}
              />
              <Route
                exact
                path="/manager/login"
                render={props => (<LoginManagerPage/>) }
              />
              <Route
                exact
                path="/manager/dashboard"
                render={props => (<ManagerDashboard/>) }
              />
            </Switch>
          </Router>
        </div>

      );
  }

}

export default withRouter(App);
