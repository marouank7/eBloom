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
                    {
                    pathColor: "#57e362",        // axios.get(`http://localhost:3005/dashboard/${type}`)
                    // .then((response) => {
            
                    //     this.choice(type);
                          
            
                    //     const newStatistics = [...this.state.statistics]
                    //     newStatistics[this.choice(type)].percentageKickOffSurvey = response.data['ROUND(AVG(answer),1)']
                            // axios.get(`http://localhost:3005/dashboard/${type}`)
        // .then((response) => {

        //     this.choice(type);
              

        //     const newStatistics = [...this.state.statistics]
        //     newStatistics[this.choice(type)].percentageKickOffSurvey = response.data['ROUND(AVG(answer),1)']
        
        //     this.setState({
        //         statistics: newStatistics
        //     }, )

        // })
        // .catch((error) => {
        //     // handle error
            
        // })
        // .finally(() => {
        //     // always executed
        // })
                    //     this.setState({
                    //         statistics: newStatistics
                    //     }, )
            
                    // })
                    // .catch((error) => {
                    //     // handle error
                        
                    // })
                    // .finally(() => {
                    //     // always executed
                    // })
                    strokeLinecap: "green",
                    strokeLinecap: "butt",
                    logo: "logoCloudAndSun",
                    percentageKickOffSurvey : "0",
                    percentageQuestionDay : "0"
                }, 
                {
                    type: "Team",
                    pathColor: "#57e362",
                    trailColor: "grey",
                    strokeLinecap: "green",
                    strokeLinecap: "butt",
                    logo: "logoCloud",
                    percentageKickOffSurvey : "0",
                    percentageQuestionDay : "0"
                }, 
                {
                    type: "Individual",
                    pathColor: "#57e362",
                    trailColor: "grey",
                    strokeLinecap: "green",
                    strokeLinecap: "butt",
                    logo: "logoSun",
                    percentageKickOffSurvey : "0",
                    percentageQuestionDay : "0"
    
                }
            ]
        }
  
       
    }
    

    choice = (type) => {
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


    UpdateLogo = (type) =>{
        
        this.choice(type)

        let logo = ""; 
        let pathColor = ""; 

        if(this.state.statistics[this.choice(type)].percentageQuestionDay >= 80 ){
            logo = "logoSun";  pathColor = "#57e362";
        }
        if(this.state.statistics[this.choice(type)].percentageQuestionDay >= 60 && this.state.statistics[this.choice(type)].percentageQuestionDay <80){
            logo = "logoCloudAndSun" ;  pathColor = "#cbdf5d";
        }
        if(this.state.statistics[this.choice(type)].percentageQuestionDay < 50){
            logo = "logoCloud" ;  pathColor = "#ffc000";
        }

        const statisticsLogo = [...this.state.statistics]
        statisticsLogo[this.choice(type)].logo = logo

        const statisticsColorDayli = [...this.state.statistics]
        statisticsColorDayli[this.choice(type)].pathColor = pathColor
       
        this.setState({statisctics : statisticsLogo});
        

    }
    // componentDidMount(){
    //     this.UpdateLogo()
    // }
        


    fetchApiMoyenne = (type) => {
        // axios.get(`http://localhost:3005/dashboard/${type}`)
        // .then((response) => {

        //     this.choice(type);
              

        //     const newStatistics = [...this.state.statistics]
        //     newStatistics[this.choice(type)].percentageKickOffSurvey = response.data['ROUND(AVG(answer),1)']
        
        //     this.setState({
        //         statistics: newStatistics
        //     }, )

        // })
        // .catch((error) => {
        //     // handle error
            
        // })
        // .finally(() => {
        //     // always executed
        // })
    }



    handleClick = (event) => {
        event.preventDefault()
        

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
            height: "100%",
            
            
        }

        const styleType = {
            textShadow:"0.3px 0.3px 0.3px black"
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
                                  <p style={styleType}>{stat.type}</p>
                                  <div className={stat.logo}></div>
                                  <ProgressCircular UpdateLogo={this.UpdateLogo} fetchApiMoyenne={this.fetchApiMoyenne} {...stat}/>
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