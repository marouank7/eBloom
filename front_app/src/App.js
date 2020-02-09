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
      company : '',
      date: moment().format("YYYY-MM-DD "),
      name: "Draft",
      categories : this.categories,
      questions:  this.categories.map(() => [])
    };

  }

  setNewCompany = (dataSet) => {
    //event.preventDefault()

    const listUp = [...this.state.companies, {...dataSet}];
    const {id, ...rest} = this.state
    this.setState({
      ...rest,
      id:undefined,
      created_at:undefined,
      companies: listUp,
      company: dataSet.name,
      questions:  this.categories.map(() => [])
    });
  }

  getKickOff = (company) => {
    let isEmpty = a => Array.isArray(a) && a.every(isEmpty);

    axios.get(`${this.URLServer}/surveys/onboarding/${company}`)
    .then((response) => {
        //handle successles
        const { data } = response;
        if (isEmpty(this.state.questions)) {
          this.setState(
              {...data}
          )
        }


    })
    .catch((error) => {
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

  componentDidUpdate() {
  }

  componentDidMount() {
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
                  this.setState({type: "Onboarding"});
                  return (<KickOffPage
                      editAnswer={this.editAnswer}
                      getKickOff={this.getKickOff}
                      kickOff={this.state}/>)
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
                             companies={this.state.companies}
                             setNewCompany={this.setNewCompany}/>) }
              />
              />
              <Route
                exact
                path="/admin/onboarding-editor"
                render={props => {
                  if(this.state.type !== 'Onboarding') this.setState({type: "Onboarding"});
                  this.getKickOff(this.state.company)

                  return (<OnBoardingEditorPage {...props}
                                        companies={this.state.companies}
                                        setNewCompany={this.setNewCompany}
                                        categories={this.state.categories}
                                        questions={this.state.questions}
                                        addQuestion={this.addQuestion}
                                        editQuestion={this.editQuestion}
                                        removeQuestion={this.removeQuestion}
                                        submitSurveyConfig={this.submitSurveyConfig} />)
                }}
              />
              <Route
                exact
                path="/admin/weekly-editor"
                render={props =>
                          (<WeeklyEditorPage {...props}
                              companies={this.state.companies}
                              setNewCompany={this.setNewCompany}/>) }
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
