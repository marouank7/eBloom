/* <BackOffice> */
import React, {Component, useState} from 'react' ;
import './styles/BackOfficePage.css';
import CategoryMenu from "./CategoryMenu";
import SmartButton from "./SmartButton";
import MyButton from "./MyButton";
import axios from 'axios';


class BackOfficePage extends Component {

    constructor(props) {
        super(props) ;

        //================================================================
        this.state = {
            // for interactivity
            //input : "none",
            // data from database
            date: "2019-04-06",
            name: "Choose one", //name
            categories: [ //survey // stringifier avant de l'envoyer, mais seulemnet cette partie
                {
                    type : "individual",
                    topics : [
                        {
                            question : "Profiter des tâches liées à mon travail.",
                        },
                        {
                            question : "Développer mes compétences et mes connaissances.",
                        },
                        {
                            question : "Attendre au travail",
                        }
                    ]
                },
                {
                  type : "Team",
                  topics : [
                      {
                          question : "Vive les travaux de groupe !",
                      },
                      {
                          question : "La communication avec les collègues.",
                      },
                      {
                          question : "Se sentir aidé au travail.",
                      }
                  ]
                },
                {
                    type : "Company",
                    topics : [
                        {
                            question : "L'argent n'est pas le plus important !",
                        },
                        {
                            question : "Des horraires souples mais rigoureusement respectés",
                        },
                        {
                            question : "Améngements pour la convivialité",
                        }
                    ]
                  }
            ]
        }
        
    }
    //=================================================================

    //__Definitions
    newQuestion = {
        content : "",
        answer : 0,
        notImportante : false
    }
    
    loadTheQuestion = () => {
        console.log("to fetch the data")
    }

    addQuestion = (data,index) => {
        console.log("data to add", data , "index " + index);
        //__def
        let inCategory = this.state.containing ;
        const {title, itsQuestions} = inCategory[index];
        //__insertion
        const newQuestion = {
            content : data,
            answer : 0,
            notImportante : false
        }
        const itsNewQuestions = [...itsQuestions, newQuestion]
        inCategory.splice(index,1, {
            category : title,
            questions: itsNewQuestions
        }) 
        //__update
        this.setState({
            containing : inCategory
        })
    }
// on peut utiser une seule fonction qui change systematiquement le state : le traitement de l'index est traduit par une autre fonction.
    removeQuestion = (index) => {
        console.log("index "+ index)
        //index translator : 
        let place = index ;
        let stageHundred = 'Is your item out of a set ?' ; 
        index >= 100 ?   stageHundred = index/100 : console.log(stageHundred);
        let stage = Math.floor(stageHundred);
        place  = index - stage*100 ;
        console.log("place " + place, "stage "+ place );
        //__ data split
        let inCategory = this.state.containing ;
        let {title, itsQuestions} = inCategory[stage];
        itsQuestions.splice(place,1);
        //__ state rebuilding
        inCategory.splice(stage,1, {
            category : title,
            questions: itsQuestions
        }) 
        //__ update
        this.setState({
            containing : inCategory
        })


    }

// une fonction passée en props vers le bouton intelligent elle prend un numéro qui liste les fonctions et renvoie les données pour elles

    clicker = (e) => {
        const numButton = e.target.key ;
        
            console.log("numButton"+ numButton);
        this.setState({input :"block"})
    }

    sendSurvey = (event) => {
        event.preventDefault()
    }

    componentDidMount() {
        this.loadTheQuestion()
        
    }
    
    // ert = {} ;
    // ert.categories

    SubmitTest = () => {
        console.log (this.state.categories) ;
        axios.post("http://192.168.0.162:3005/surveys",
         this.state )
        .then(res => console.log(res))
        // fetch("http://192.168.0.162:3005/surveys", {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: this.state,
        //     })
        //     .then((response) => response.json())
    }
   
        
    

    render() {
        const smartAction = (choice, index, data) => {
            console.log("smartAction is called")
           switch (choice) {
            case 1 : 
                this.addQuestion(data, index);
                break;
            case 2 :
                this.removeQuestion(index);
                break;
            default :
            console.log("problem with the choice")
           }
        }
        const _container = this.state.categories ;
       

        
        // return(
        //     <div className="back-office-page">
        //          {this.state.containing.map( (set,index) => 
        //                 <CategoryMenu mainState={set}  inputs={this.smartAction} clef={index}/>
        //             )
        //          }
        //     </div>
        // )
        return(
            <form className="back-office-page" onSubmit={this.sendSurvey}>
                    {_container.map( 
                        (set,index) => 
                            (<div className="category-menu" key={index}>
                                <div className="category-box">
                                    <div className="category-head inBox-size">
                                        <div>{set.type}</div>
                                            <SmartButton role="toShow" act={this.clicker} num={index}/>
                                    </div>
                                    {set.topics.map( 
                                        (request,index) => {
                                            //listing = listing+1;
                                            return(
                                                <div className="back-off-question inBox-size" key={index}>
                                                    <div>{request.question}</div>
                                                    <SmartButton role="toRemove" act={this.clicker} num={index} />
                                                </div>
                                            )
                                        }   
                                    )}
                                    {/* <input type="text" style={{"display": this.state.input}}/> */}
                                    <MyButton visible={this.state.input} />
                                    <SmartButton role="toAdd" act={this.clicker} num={index} />
                                </div>
                            </div>
                            )
                    )
                 }
                <input type="submit" value="Submit" onClick={this.SubmitTest}/>
            </form>
        )
    }
}

export default BackOfficePage ;

