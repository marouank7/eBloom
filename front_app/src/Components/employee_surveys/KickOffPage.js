import React, {Component} from 'react' ;
import axios from 'axios';
import TexteDescriptif from'./TexteDescriptif.js';
import SurveyForm from './SurveyForm'
import './styles/KickOffPage.css';



/** KickOffPage displays a kick-off survey for new employee . */

export default class KickOffPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surveyGET : {
                date: "2019-04-06",
                name: "Choose one",
                company : "ebloomTest",
                questions: [ 
                ]
            }
        } ;// data from database
        this.newAnswer = {
            survey_ID : -2,
            type: "kick-off",
            categorie: '',
            line_ID : -2,
            question: '',
            answer : -2,
            avatar_ID : 999,
        }
    }//___ constructor end ___
    
//__ Actions 
    fetchApi = () => {
        axios.get('http://localhost:3005/surveys/1')
        .then((response) => {
            //handle success
    
            console.log("iciiiiii", response);
    
            console.log("survey in state : " , response.data);
            this.setState({ 
                surveyGET : {...response.data},
            })
            
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        })
    }

// 0) est créé un ensemble de réponses à -2 par défaut
// 1) une sécurité check que la personne à essayer de répondre ( > -2) quand elle a essayé (1 questin par categ, 2 question min), toutes les valeurs du state à => 0 .
// 2) toggle function set -1  (affiche valid not important) / 0 (reset button display)
// 3) étoile set une valeur 1 à 5 ( différent de -1 donc reset button not important display).

    _QuestionInception = (crud, content, setEntrance, stepsWay) => { // crud means one of the 4 actions, content means the possible content to bring in,setEntrance as the upper layer name of the target set, stepsWay is the list (array) of doors (numbers) to open in order to reach the target.

        const [aStageIndex, aLineIndex,...lastSteps] = stepsWay ;
        
                // let categories = [...this.state.categories] ; // array of objects

                // const itsType = categories[aStageIndex].type ; // string
                // const oldQuestions = [...categories[aStageIndex].topics] // array of objects

       // >>>>>>>>> >>>>>>>>>>>>>>>>>>>   to the parent function ::  let categories = [...this.state.categories] ; // array of objects

        const itsType = setEntrance[aStageIndex].type ; // string
        const oldQuestions = [...setEntrance[aStageIndex].topics] // array of objects

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
                // const beforeIndex = [...categories.slice(0, aStageIndex)];
                // const afterIndex = [...categories.slice(aStageIndex+1, categories.length)];

        const beforeIndex = [...setEntrance.slice(0, aStageIndex)];
        const afterIndex = [...setEntrance.slice(aStageIndex+1, setEntrance.length)];

        // new body building
        let callBackCategs = [
                                ...beforeIndex,
                                updatedCateg, // updated object
                                ...afterIndex
                            ] ;

        return callBackCategs ;
    }

// >>>>>>>>> >>>>>>>>>>>>>>>>>>>   to the parent function ::  let categories = [...this.state.categories] ; // array of objects
//__Button process
    // Quand on tente de répondre : cela crée une nouvelle réponse dans la liste. 
    // il faut générer des clefs de position pour chaque boxQR
    // je passe en props une fonction qui récupère la note des étoiles...
    //___ cette fonction contient une fonction qui check si la réponse existe déjà dans la liste (compare les coordonnées), ou bien en rajoute une avec les coordonnées.
    //______ la fonction check contient donc 3 fonctions, toutes reprennent les coordonnées : filtre liste : si existe : fonction de Màj, sinon, création de l'une .
    // je passe en props une fonction qui récupère la note de not important. 
    //___ cette fonction peut être la même que celle des étoiles.
    // => dans ce cas, toggle function du not Important display  dans BoxQR . 
    // =>=> le look de not important dépend du state de BoxQr, son action onClick de la fonction parente

    // _____ onClick met simultanément à jour l'état du state parent ET met aussi à jour le state de la Box, avec la même valeur.

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

//__Class life cycles
    componentDidMount() {
        this.fetchApi();
    }

    componentDidUpdate() {
        console.log(this.state);
    }

//__On rendering
    render() {
        
        console.log(this.state.survey)
        return(
            <div className="kickOffPage">
                     <h1>Kick-off Survey</h1>
                    <TexteDescriptif/>
                    <SurveyForm categories={this.state.surveyGET} />
            </div>
        )
    }
    
}