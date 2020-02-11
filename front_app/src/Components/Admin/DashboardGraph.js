import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import axios from 'axios';
import '../Admin/styles/DashboardPage.css'
// import '../styles/DashboardPage.css';
import ProgressCircular  from '../Admin/ProgressCircular'
// import ProgressCircularIndividual from'../ProgressCircularIndividual'
// import ProgressCircularTeam from '../ProgressCircularTeam'
// import NavAdmin from './NavAdmin'


class DashboardGraph extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            showHelp : false,
            statistics : [
                {
                    type: "Company",
                    pathColor: "#57e362",
                    trailColor: "grey",
                    strokeLinecap: "green",
                    logo: "logoCloudAndSun",
                    percentageKickOffSurvey : " ",
                    percentageQuestionDay : "80"
                }, 
                {
                    type: "Team",
                    pathColor: "#57e362",
                    trailColor: "grey",
                    strokeLinecap: "green",
                    logo: "logoCloud",
                    percentageKickOffSurvey : " ",
                    percentageQuestionDay : "70"
                }, 
                {
                    type: "Individual",
                    pathColor: "#57e362",
                    trailColor: "grey",
                    strokeLinecap: "green",
                    logo: "logoSun",
                    percentageKickOffSurvey : 0,
                    percentageQuestionDay : "30"
    
                }
            ]
        }
    }

    UpdateLogo = () =>{
        if(this.state.percentageQuestionDay >= 80 ){
            this.setState({logo : "logoSun"});
        }
        if(this.state.percentageQuestionDay >= 60 && this.state.percentageQuestionDay <80){
            this.setState({logo : "logoCloudAndSun"});
        }
        if(this.state.percentageQuestionDay < 50){
            this.setState({logo : "logoCloudAndSun"});
        }

    }



    fetchApiMoyenne = (type) => {
        axios.get(`http://localhost:3005/dashboard/${type}`)
        .then((response) => {
            // console.log("je suis dans ma route dashboard fetchApi",response)

            // console.log("Reponse data ", response);


            const choice = (type) => {
                if(type === "Company"){
                    return 0
                }
                if(type === "Team"){
                    return 1
                }
                if(type === "Individual"){
                    return 2
                }
            }

            console.log("survey in state !!: " , response.data['ROUND(AVG(answer),1)']);
            const newStatistics = [...this.state.statistics]
            newStatistics[choice(type)].percentageKickOffSurvey = response.data['ROUND(AVG(answer),1)']
      
            console.log("!!newStatistics!!", newStatistics)
        
            this.setState({
                statistics: newStatistics
            }, ()=>{console.log("as setstate")})

        })
        .catch((error) => {
            // handle error
            console.log("je suis dans error",error);
        })
        .finally(() => {
            // always executed
        })
    }



    handleClick = (event) => {
        event.preventDefault()
        //console.log("hide")
        // console.log(value)

        this.setState(state => ({
            showHelp : !this.state.showHelp
        }));
    }
    render() { 

        const styles = {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexFlow: "row nowrap",
            height: "100%"
            
        }

        const containerStyles = {
            height: "100%",
            width: "33%",
            display: "flex",
            width: "33%",
            justifyContent: "center"
        }
        return(
            <>
                 
  
                  <div className="diagramArea" style={styles}>
                      {this.state.statistics.map((stat, index) => {
                          return(
                          
                          <div className="companyContainer" style={containerStyles}>
                              <div>
                                  <p>{stat.type}</p>
                                  <div className={stat.logo}></div>
                                  <ProgressCircular fetchApiMoyenne={this.fetchApiMoyenne} {...stat}/>
                              </div>
                          </div>
  
                      
                          )
                      })}
                  </div>
  
                  <div className="circleHelp" onClick={this.handleClick}>
                      <div className={`helpBar ${this.state.showHelp ? '' : 'hide'}`}>
                      </div>
                  </div>
            </>
          )
      }
  }
export default DashboardGraph ;