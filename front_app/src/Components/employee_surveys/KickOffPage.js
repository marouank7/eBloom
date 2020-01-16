import React, {Component} from 'react' ;
import axios from 'axios'
import TexteDescriptif from'./TexteDescriptif.js';
import SurveyForm from './SurveyForm';
import './styles/KickOffPage.css';


// adminSetNQPC() = adminSetNumberofQuestionPerCategory()

/** KickOffPage displays a kick-off survey for new employee . */

export default class KickOffPage extends Component {

    //1 - creer un state  d'exemple list of categories
    // 1.1 quand ca remarche, suprimer le contenu de l'array
    // 2 - Faire un axios get a /surveys/1
    // 3 - Configurer,sur le serveur, la route /surveys/:id pour qu'elle renvoie systematiquement de la fake data: Elle renvoie notre list of categories ecrite à la mano !
    // 4 de retour dans l'app react, capter la reponse renvoyee par le serveur et la mettre dans le state !
    constructor(props) {
        super(props)
        this.state = {
            listOfCategories : []
        }
    }
    // listOfCategories = [
    //     {
    //         type : "individual",
    //         questions : [
    //             {
    //                 question : "Quel est le ",
    //                 answer : 2,
    //                 notImportante : false
    //             },
    //             {
    //                 question : "Quel est le ",
    //                 answer : 3,
    //                 notImportante : false
    //             },
    //             {
    //                 question : "Quel est le ",
    //                 answer : 2,
    //                 notImportante : false
    //             }
    //         ]
    //     },
    //     {
    //         type : "team",
    //         questions : [
    //             {
    //                 question : "Quel est le 3",
    //                 answer : 1,
    //                 notImportante : false
    //             },
    //             {
    //                 question : "Quel est le  hh",
    //                 answer : 3,
    //                 notImportante : false
    //             },
    //             {
    //                 question : "Quel est le ee",
    //                 answer : 2,
    //                 notImportante : false
    //             }
    //         ]
    //     },
    //     {
    //         type : "company",
    //         questions : [
    //             {
    //                 question : "Quel est le  eee",
    //                 answer : 1,
    //                 notImportante : false
    //             },
    //             {
    //                 question : "Quel est le  ere",
    //                 answer : 3,
    //                 notImportante : false
    //             },
    //             {
    //                 question : "Quel est le ",
    //                 answer : 0,
    //                 notImportante : false
    //             }
    //         ]
    //     }
        
    // ]

    componentDidMount(){
        this.fetchApi();
    }

    // testeSetstate = () => {
    //     this.setState({ listOfCategories : response.data.listOfCategories})
    // }
   

    fetchApi = () => {
        axios.get('http://localhost:3005/surveys/1')
        .then((response) => {
            // handle success
            // JSON.parse(response.data)
            //console.log("iciiiiii", response);

            let obj = response.data;

            // const parsedSurvey = {
            //     ...obj,
            //     questions: JSON.parse(response.data.questions)
            // }

            // console.log(parsedSurvey)
            this.setState({ listOfCategories : response.data})
            
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
    };
    

    //Rendering_________

    render() {
        return(
            <div className="kickOffPage">
                <h1>Kick-off Survey</h1>
                <TexteDescriptif/>
                <SurveyForm categories={this.state.listOfCategories} />
            </div>
        )
    }
    
}