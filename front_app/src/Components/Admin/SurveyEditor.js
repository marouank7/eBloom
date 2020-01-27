/* <BackOffice> */
import React, {Component, useState} from 'react' ;
import './styles/BackOfficePage.css';
import CategoryMenu from "./CategoryMenu";
import SmartButton from "./SmartButton";
import MyTextArea from "./MyTextArea";
import axios from 'axios';

// Il reste des bugs avec le onblur, il reste à importer d'un survey sélectionné => Un fecth de survey en stock , puis fetch des données choisies, ou bien ajouter un survey.
// Il reste à formater le bouton dans MyTextArea (sans rôle actif, juste indicatif). A ce propos, il faut ajouter un cursuer de position et les fonctions de copier/coller.
// automatique fetch to database to add the new question ?  >>> quand la data stockée en DB aura été reformatée.
// sécurité avant suppression d'une question à ajouter car envoi en DB  = suppression définitive....

class SurveyEditor extends Component {

    constructor(props) {
        super(props) ;

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
            type: "Onboarding",
            questions: [ //survey // stringifier avant de l'envoyer, mais seulemnet cette partie
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

    } //___ constructor end ___

//__ Before actions get activated
    loadTheQuestion = () => {
        console.log("to fetch the data")
    }

//__ Actions on the class state
    // Function built for this class state composition pattern. When the code is finished, it will be possible to apply 4 actions : create, read, update, delete the content of a targeted question.
    _QuestionInception = (crud, content, stepsWay) => { // crud means one of the 4 actions, content means the possible content to bring in, stepsWay is the list (array) of doors (numbers) to open in order to reach the target.

        const [aStageIndex, aLineIndex,...lastSteps] = stepsWay ;

        let questions = [...this.state.questions] ; // array of objects

        const itsType = questions[aStageIndex].type ; // string
        const oldQuestions = [...questions[aStageIndex].topics] // array of objects
        let updatedCateg = {} // To be populated on switch.
        switch(crud) {

            case "create" : // C
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
            case "read" : // R
                console.log("read he question : " + oldQuestions[aLineIndex]);
                if(aLineIndex) return oldQuestions[aLineIndex] ;  // before return : shall check lastSteps and go deeper on demand
                else return oldQuestions ;
            break ;
            case "update" : // U

            console.log("_structuralStateInception has no function to update data. Up to you to add one...")
            // use to add content not to the target but inside the target !
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
        const beforeIndex = [...questions.slice(0, aStageIndex)];
        const afterIndex = [...questions.slice(aStageIndex+1, questions.length)];

        // new body building
        let callBackCategs = [
                                ...beforeIndex,
                                updatedCateg, // updated object
                                ...afterIndex
                            ] ;

        return callBackCategs ;
    }

    deleteQuestion = (aStageIndex, aLineIndex, event ) => { // In this case, aStageIndex indicates which category has the question to delete , aLineIndex, which question of the list is the target.
        event.preventDefault();
        event.stopPropagation();

        const stepsWay = [aStageIndex, aLineIndex] ; // target adress param restructuring for inception pattern.

        const callBackCategs = this._QuestionInception ("delete", '_', stepsWay) ; //__QuestionInception()
            console.log("new categs on delete: ",callBackCategs);
        this.setState({
            //#parametrics for rendering
            inputDisplay : -1 ,
            mayLoad : {
                hasMount : false,
                hasWorked : true,
            },
            //#structural
            questions : callBackCategs
        })

    }

    createQuestion = (anIndex, content, event) => { // In this case, anIndex indicates which category is the target, content is what to add in this category.
        event.preventDefault();
        event.stopPropagation();

        const stepsWay = [anIndex] ; // target adress param restructuring for for inception pattern.

        const callBackCategs = this._QuestionInception ("create", content, stepsWay) ; //__QuestionInception()
            console.log(callBackCategs);
        this.setState({
            //#parametrics for rendering
            inputDisplay : -1 ,
            mayLoad : {
                hasMount : false,
                hasWorked : true,
            },
            //#structural
            questions : callBackCategs
        })
    }

//__Buttons process
     ShowAtNum = withIndexOfWantedTarget => this.setState({inputDisplay : withIndexOfWantedTarget}) ;
     ChokeAlert = () => alert(`Question en cours : catégorie "${this.state.questions[this.state.inputDisplay].type}" ...`) ;
     SubmitSurvey = (event) => {
         event.preventDefault();
         let {inputDisplay, mayLoad, ...goodData} = this.state ;
         console.log (goodData) ;
         // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> >>>  << <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

         axios.post("http://localhost:3005/surveys", goodData )
         .then(res => console.log(res))
     }

//__Class life cycles
    componentDidMount() {
        this.loadTheQuestion();
        this.setState({
            mayLoad : {
                hasMount : true,
                hasWorked : false,
            }
        })

    }
    // componentDidUpdate() {
    // }

//__On rendering
    render() {

    // ___Short Names___
        const mayLoad = this.state.mayLoad ;

        const _container = this.state.questions ;
        const _display = this.state.inputDisplay ;

    // ___ ??????????????????????? After update ...... Before rendering ??????????????????????????? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        // allows child functions of new selected element after the rendering of # structural state #  ("purpose ! Work in progess...")
        const _isEffective = () => {
           if( (mayLoad.hasMount || mayLoad.hasWorked) && _display >= 0) { console.log(true); return true ; }
                                    else { console.log(false) ;return false ;}
                                 }
        return(
            <form className="" >
                    {_container.map(            // list & display questions objects as 'set' with properties type (string), topics (array of question objects).
                        (set,stageIndex) =>
                                    (<div className="category-menu" key={stageIndex}>
                                        <div className="category-box">
                                                <div className="category-head inBox-size">
                                                <div>{_container[stageIndex].type}</div>
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
                                                process={this.createQuestion}
                                                button= {<SmartButton role="toRemove" process={alert} />}
                                                stageNumber={stageIndex}
                                            />
                                            <SmartButton role="toAdd"
                                                process= { !(_display < 0)
                                                            ? this.ChokeAlert
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

export default SurveyEditor ;


// Pierre personal codes, to be move away :

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
//         let questions = this.state.questions ; // array of objects

//         const itsType = questions[anIndex].type ; // string
//         const oldQuestions = questions[anIndex].topics // array of objects
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
//         const beforeIndex = questions.slice(0, anIndex);
//         const afterIndex = questions.slice(anIndex+1, questions.length);

//         // new body building
//         let callBackCategs = [
//                                 ...beforeIndex,
//                                 updatedCateg, // updated object
//                                 ...afterIndex
//                             ] ;

//             console.log(callBackCategs);
//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
