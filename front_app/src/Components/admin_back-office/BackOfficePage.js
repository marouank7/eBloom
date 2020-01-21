/* <BackOffice> */
import React, {Component, useState} from 'react' ;
import './styles/BackOfficePage.css';
import CategoryMenu from "./CategoryMenu";
import SmartButton from "./SmartButton";
import MyTextArea from "./MyTextArea";
import axios from 'axios';

//=[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[()]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// °°°°°°°°°°° Est-ce que ile ne faudrait pas passer diverIncpetion en paramètre 
const  diverInception = (takenObject, whichKey, stepsWay) => {
    let stateProperties = Object.keys(takenObject);
    // la premieère étape si dessus et ce qui en découle doit donc faire l'objet d'un arbitrage.
    //Je peux me retrouver à plonger sur une lettre d'un string, un mot d'une array. 
    // je check si stepsWay est le dernier élement du chemin (length + 1) .
    // °°°°°°°°° Si  oui, je change le contenu suivant un switch (add : value, change : value, delete) (définir la commande trnasmise comme autoprops);
    // Sinon, j'envoie erruer déclarant (erreur de structure objet, ou bien erreur de chemin)

    stateProperties.map( thatKey => {
        if(whichKey == thatKey) {
        //________ Check what in you dive __________
            if ( typeof(thatKey) !== "string" && typeof(thatKey) !== "number" && typeof(thatKey) === "object") {
                console.log("thatKey is an Array or an Object")
                    try {
                        let keyProperties = Object.keys(thatKey) ;
                        if (keyProperties != '' && keyProperties != undefined ) {
                            if ( keyProperties.length = 0 ) alert("thatKey of takenObject for inception is empty") ;
                            //_________ Check OK : let's dive deeper _______
                            let jumpIn = stepsWay.shift() ;
                            /**
                             * je jumpin in thatKey[jumpIn] as whichKey 
                             * thatKey = takenObject
                             * steptsWay as stepsWay
                             * °°°°°°°°°°°  = diverInception()
                             */
                         } else { // Error
                            alert("thatKey of takenObject for inception is not an iterator") ;
                        return null ;
                        }
                    } catch (TypeError) { // Error
                        alert("ThatKey of takenObject for inception is not an iterator") ;
                        return null ;
                    }
            }

        }
    })
}
/**
 * Il faudrait rmeplacer diver inception par nouveau contenu et son contenu actuel , le mettre dans incpetionObj.
 * Diverinception = (maFunc, itsparam, input) => {
 *  firstResult = MaFunc(input ...itsparam) ;
 *   let newparam = changeparamonresult( firstResult, itsparam);
 *  nestedResult = MaFunc(firstResult, ...newparam);
 * // repplicate above... al many times needed
 * }
 * 
 */
//                             ==========================================================================
//  const inceptionObj = (takenObject, whichkey, stepsWay) => {
//         // stepsWay = [ 4° key, 6° element]
//         //inception process
       
//         return `Inception occured on ${takenObject}.${whichkey}.`
//             }
//         })
//         let categories = this.state.categories ; // array of objects

//         const itsType = categories[anIndex].type ; // string
//         const oldQuestions = categories[anIndex].topics // array of objects
//         const newQuestion = {
//                                 question : content
//                             } ;
//         // new lower body                    
//         const updatedCateg = {
//                                 type : itsType,
//                                 topics : [
//                                            ...oldQuestions,
//                                            newQuestion // updated content
//                                         ]
//                             } ;

//         // upper body sliced around
//         const beforeIndex = categories.slice(0, anIndex);
//         const afterIndex = categories.slice(anIndex+1, categories.length);

//         // new body building
//         let callBackCategs = [
//                                 ...beforeIndex,
//                                 updatedCateg, // updated object
//                                 ...afterIndex
//                             ] ;
            
//             console.log(callBackCategs);
//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

class BackOfficePage extends Component {

    constructor(props) {
        super(props) ;

        //================================================================
        this.state = {

        //_#__ Parametric state __#__
            inputDisplay : -1,
            mayLoad : {
                hasMount : false,
                hasWorked : false
            }
            ,
        //_#__ Structural state __#__

            // data from database
            date: "2019-04-06",
            name: "Choose one",
            
            categories: [ //survey // stringifier avant de l'envoyer, mais seulemnet cette partie
                {
                    type : "Individual",
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

    // Button process use
    clicker = num => {
        //e.preventDefault();
        const numButton = num;
        
        console.log("numButton"+ numButton);
        //this.setState({inputDisplay :})
    }
    ShowAtNum = withIndexOfWantedTarget => this.setState({inputDisplay : withIndexOfWantedTarget}) ;
    StruckAlert = () => alert(`Question en cours : catégorie "${this.state.categories[this.state.inputDisplay].type}" ...`) ;
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

    SubmitSurvey = (event) => {
        event.preventDefault();
        let {inputDisplay, mayLoad, ...goodData} = this.state ;
        console.log (goodData) ;

        // axios.post("http://192.168.0.162:3005/surveys",
        //  this.state )
        // .then(res => console.log(res))
    }
    
    _QuestionInception = (crud, content, stepsWay) => {

        const [aStageIndex, aLineIndex,...lastSteps] = stepsWay ;
        
        let categories = [...this.state.categories] ; // array of objects

        const itsType = categories[aStageIndex].type ; // string
        const oldQuestions = [...categories[aStageIndex].topics] // array of objects
        let updatedCateg = {} // To be populated on switch.
        switch(crud) {

            case "create" : // C
                console.log("_structuralStateInception has no function to create new data. Up to you to add one...")
                // use to create a new topics box with new type ?????
            break ;
            case "read" : // R
                // return  the element target
                console.log("unread question yet");
            break ;
            case "update" : // U
                const newQuestion = { 
                    question : content
                } ;
                // new lower body                    
                updatedCateg = {
                    type : itsType,
                    topics : [
                               ...oldQuestions,
                               newQuestion // updated content 
                            ]
                } ;

            break ;
            case "delete" : // D
                // find the question to delete 
                oldQuestions.splice(aLineIndex,1);

                // new lower body                    
                updatedCateg = {
                    type : itsType,
                    topics : [
                                ...oldQuestions, // updated content 
                            ]
                };
            break ;
        }

        // upper body sliced around
        const beforeIndex = [...categories.slice(0, aStageIndex)];
        const afterIndex = [...categories.slice(aStageIndex+1, categories.length)];

        // new body building
        let callBackCategs = [
                                ...beforeIndex,
                                updatedCateg, // updated object
                                ...afterIndex
                            ] ;

        return callBackCategs ;
    }



    deleteQuestion = (aStageIndex, aLineIndex, event ) => {
        event.preventDefault();
        event.stopPropagation();

        const stepsWay = [aStageIndex, aLineIndex] ; // target adress param restructuring for _QuestionInception().

        const callBackCategs = this._QuestionInception ("delete", '_', stepsWay) ;

        // let categories = this.state.categories ; // array of objects

        // const itsType = categories[aStageIndex].type ; // string
        // const oldQuestions = [...categories[aStageIndex].topics] // array of objects

        // // find the question to delete >>>>>>>>>>>>>>>>>>>>>>
        // oldQuestions.splice(aLineIndex,1);

        // // new lower body                    
        // const updatedCateg = {
        //     type : itsType,
        //     topics : [
        //                ...oldQuestions, // updated content <<<<<<<<<<<<<<<<<<<<<<<<
        //             ]
        // };

        //  // upper body sliced around
        //  const beforeIndex = [...categories.slice(0, aStageIndex)];
        //  const afterIndex = [...categories.slice(aStageIndex+1, categories.length)];

        //  // new body building
        // let callBackCategs = [
        //     ...beforeIndex,
        //     updatedCateg, // updated object
        //     ...afterIndex
        // ] ;

        console.log("new categs on delete: ",callBackCategs);

        this.setState({
            inputDisplay : -1 ,
            mayLoad : {
                hasMount : false,
                hasWorked : true,
            },
            categories : callBackCategs
        })

    }

    updateQuestion = (anIndex, content, event) => {
        event.preventDefault();
        event.stopPropagation();

        const stepsWay = [anIndex] ; // target adress param restructuring for _QuestionInception().

        const callBackCategs = this._QuestionInception ("update", content, stepsWay) ;
        // const unlockState = {...this.state} ;
        // let categories = unlockState.categories ; // array of objects

        // const itsType = categories[anIndex].type ; // string
        // const oldQuestions = [...categories[anIndex].topics] // array of objects
        // const newQuestion = { //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //                         question : content
        //                     } ;
        // // new lower body                    
        // const updatedCateg = {
        //                         type : itsType,
        //                         topics : [
        //                                    ...oldQuestions,
        //                                    newQuestion // updated content <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        //                                 ]
        //                     } ;

        // // upper body sliced around
        // const beforeIndex = [...categories.slice(0, anIndex)];
        // const afterIndex = [...categories.slice(anIndex+1, categories.length)];

        // // new body building
        // let callBackCategs = [
        //                         ...beforeIndex,
        //                         updatedCateg, // updated object
        //                         ...afterIndex
        //                     ] ;
            
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
   
    

    

    render() {
        
    // ___Short Names___
        const mayLoad = this.state.mayLoad ;

        const _container = this.state.categories ;
        const _display = this.state.inputDisplay ;

        // allows child functions of new selected element after the rendering of # structural state #  ("purpose ! Work in progess...")
        const _isEffective = () => { 
           if( (mayLoad.hasMount || mayLoad.hasWorked) && _display >= 0) { console.log(true); return true ; }
                                    else { console.log(false) ;return false ;}
                                 } 
        return(
            <form className="back-office-page" >
                    {_container.map(            // list & display categories objects as 'set' with properties type (string), topics (array of question objects).
                        (set,stageIndex) => 
                                    (<div className="category-menu" key={stageIndex}>
                                        <div className="category-box">
                                                <div className="category-head inBox-size">
                                                    <div>ert</div>
                                                        {/* <SmartButton role="toShow" act={this.clicker} num={stageIndex}/> */}
                                                </div>
                                                {set.topics.map(        // list & display topics objects as 'request'  - each one having only a question property (it delivers the question string).
                                                    (request, indx) =>
                                                                (
                                                                    <div key={indx} className="back-off-question inBox-size">

                                                                        <div>{request.question }</div>

                                                                        <SmartButton role="toRemove" 
                                                                            process={this.deleteQuestion} 
                                                                            stageNumber={stageIndex} 
                                                                            lineNumber={indx} 
                                                                        />
                                                                    </div>
                                                                ) 
                                                )}

                                            <MyTextArea     // for each topic (alias 'set') there is a field to add one question to the survey
                                                visible={ _display == stageIndex ? "block" : "none"} 
                                                isActive = {_isEffective()}
                                                process={this.updateQuestion}
                                                button= {<SmartButton role="toRemove" process={alert} />}
                                                stageNumber={stageIndex} 
                                            />
                                            <SmartButton role="toAdd" 
                                                process= { !(_display < 0) 
                                                            ? this.StruckAlert 
                                                            : this.ShowAtNum} stageNumber={stageIndex} 
                                            />
                                        </div>
                                    </div>
                                    )
                    )}
                <input type="submit" value="Submit" onClick={this.SubmitSurvey}/>
            </form>
        )
    }
}

export default BackOfficePage ;

