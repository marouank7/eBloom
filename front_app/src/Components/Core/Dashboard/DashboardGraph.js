import React, { Component } from 'react';
import '../../Admin/styles/DashboardPage.css'
import ProgressCircular  from './ProgressCircular'

class DashboardGraph extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            showHelp : false
        }
    }

    handleClick = (event) => {
        event.preventDefault()

        this.setState(state => ({
            showHelp : !this.state.showHelp
        }));
    }
    render() {
        const statistics = [
            {
                type: "company",
                pathColor: "#57e362",
                trailColor: "grey",
                strokeLinecap: "green",
                logo: "logoCloudAndSun"
            },
            {
                type: "Team",
                pathColor: "#57e362",
                trailColor: "grey",
                strokeLinecap: "green",
                logo: "logoCloud"
            },
            {
                type: "Individual",
                pathColor: "#57e362",
                trailColor: "grey",
                strokeLinecap: "green",
                logo: "logoSun"

            }
        ]

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
            justifyContent: "center"
        }

        return(<>
              <div className="diagramArea" style={styles}>
                  {statistics.map((stat, index) => {
                      return(<div key={index} className="companyContainer" style={containerStyles}>
                            <div>
                                <p>{stat.type}</p>
                                <div className={stat.logo}></div>
                                <ProgressCircular {...stat}/>
                            </div>
                        </div>)
                  })}
              </div>

              <div className="circleHelp" onClick={this.handleClick}>
                  <div className={`helpBar ${this.state.showHelp ? '' : 'hide'}`}>
                  </div>
              </div>
            </>)
      }
  }
export default DashboardGraph ;
