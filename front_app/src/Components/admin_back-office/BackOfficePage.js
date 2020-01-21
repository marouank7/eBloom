/* <BackOffice> */
import React, {Component, useState} from 'react' ;
import './styles/BackOfficePage.css';
import CategoryMenu from "./CategoryMenu";
import SmartButton from "./SmartButton";
import MyTextArea from "./MyTextArea";
import axios from 'axios';


class BackOfficePage extends Component {

    constructor(props) {
        super(props) ;

        //================================================================
        this.state = {
            // for interactivity
            inputDisplay : -1,
            mayLoad : {
                hasMount : false,
                hasWorked : false
            }
            ,
            // data from database
            date: "2019-04-06",
            name: "Choose one", //name
            categories: [ //survey // stringifier avant de l'envoyer, mais seulemnet cette partie
                {
                    type : "Individual",
                    topics : [
                        // {
                        //     question : "Profiter des tâches liées à mon travail.",
                        // },
                        // {
                        //     question : "Développer mes compétences et mes connaissances.",
                        // },
                        // {
                        //     question : "Attendre au travail",
                        // }
                    ]
                },
                {
                  type : "Team",
                  topics : [
                    //   {
                    //       question : "Vive les travaux de groupe !",
                    //   },
                    //   {
                    //       question : "La communication avec les collègues.",
                    //   },
                    //   {
                    //       question : "Se sentir aidé au travail.",
                    //   }
                  ]
                },
                {
                    type : "Company",
                    topics : [
                        // {
                        //     question : "L'argent n'est pas le plus important !",
                        // },
                        // {
                        //     question : "Des horraires souples mais rigoureusement respectés",
                        // },
                        // {
                        //     question : "Améngements pour la convivialité",
                        // }
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
        // console.log("data to add", data , "index " + index);
        // //__def
        // let inCategory = this.state.containing ;
        // const {title, itsQuestions} = inCategory[index];
        // //__insertion
        // const newQuestion = {
        //     content : data,
        //     answer : 0,
        //     notImportante : false
        // }
        // const itsNewQuestions = [...itsQuestions, newQuestion]
        // inCategory.splice(index,1, {
        //     category : title,
        //     questions: itsNewQuestions
        // }) 
        // //__update
        // this.setState({
        //     containing : inCategory
        // })
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
        this.setState({inputDisplay :"block"})
    }

    sendSurvey = (event) => {
        event.preventDefault()
    }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    componentDidMount() {
        this.loadTheQuestion();
        this.setState({
            mayLoad : {
                hasMount : true,
                hasWorked : false,
            }
        })
        
    }

    
    componentDidUpdate() {

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

    updateQuestion = (anIndex, content, event) => {
        event.preventDefault();
        event.stopPropagation();

        //From State
        let categories = this.state.categories ; // array of objects

        const itsType = categories[anIndex].type ; // string
        const oldQuestions = categories[anIndex].topics // array of objects
        const newQuestion = {
                                question : content
                            } ;
        // new lower body                    
        const updatedCateg = {
                                type : itsType,
                                topics : [
                                           ...oldQuestions,
                                           newQuestion // updated content
                                        ]
                            } ;

        // upper body sliced around
        const beforeIndex = categories.slice(0, anIndex);
        const afterIndex = categories.slice(anIndex+1, categories.length);

        // new body building
        let callBackCategs = [
                                ...beforeIndex,
                                updatedCateg, // updated object
                                ...afterIndex
                            ] ;
            
            console.log(callBackCategs);


        
        this.setState({
            inputDisplay : -1 ,
            mayLoad : {
                hasMount : false,
                hasWorked : true,
            },
            categories : callBackCategs
        })
    }
   
    // Button process use
    ShowAtNum = withIndexOfWantedTarget => this.setState({inputDisplay : withIndexOfWantedTarget}) ;
    StruckAlert = number => alert(`Question en cours. Catégorie ${this.state.categories[this.state.inputDisplay].type} .`) ;

    

    render() {
        // const smartAction = (choice, index, data) => {
        //     console.log("smartAction is called")
        //    switch (choice) {
        //     case 1 : 
        //         this.addQuestion(data, index);
        //         break;
        //     case 2 :
        //         this.removeQuestion(index);
        //         break;
        //     default :
        //     console.log("problem with the choice")
        //    }
        // }

        // ___Short Names___
        const mayLoad = this.state.mayLoad ;

        const _container = this.state.categories ;
        const _display = this.state.inputDisplay ;
        
       const _isEffective = () => { 
           console.log("isEffective?");
           if( (mayLoad.hasMount || mayLoad.hasWorked) && _display >= 0) { console.log(true); return true ; }
                                    else { console.log(false) ;return false ;}
                                 } 
        return(
            <form className="back-office-page" onSubmit={this.sendSurvey}>
                    {_container.map(            // list & display categories objects as 'set' with properties type (string), topics (array of question objects).
                        (set,index) => 
                                (<div className="category-menu" key={index}>
                                    <div className="category-box">
                                            <div className="category-head inBox-size">
                                                <div>{set.type}</div>
                                                    <SmartButton role="toShow" act={this.clicker} num={index}/>
                                            </div>
                                            {set.topics.map(        // list & display topics objects as 'request'  - each one having only a question property (it delivers the question string).
                                                (request,index) =>
                                                    (
                                                        <div className="back-off-question inBox-size" key={index}>
                                                            <div>{request.question}</div>
                                                            <SmartButton role="toRemove" act={this.clicker} num={index} />
                                                        </div>
                                                    ) 
                                            )}
                                        <MyTextArea     // for each topic (alias 'set') there is a field to add one question to the survey
                                            visible={ _display == index ? "block" : "none"} 
                                            isActive = {_isEffective()}
                                            process={this.updateQuestion}
                                            button= {<SmartButton role="toRemove" process={alert} />}
                                            num={index} 
                                        />
                                        <SmartButton role="toAdd" process={ !(_display < 0) ? this.StruckAlert : this.ShowAtNum} num={index} />
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

