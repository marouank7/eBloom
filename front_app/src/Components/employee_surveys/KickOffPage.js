import React, {Component} from 'react' ;
import axios from 'axios'
import TexteDescriptif from'./TexteDescriptif.js';
import SurveyForm from './SurveyForm'
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
            survey : []  
        }
    }
 // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> here can appear some bug after this merge.
    componentDidMount() {
        this.fetchApi();
    }

    // testeSetstate = () => {
    //     this.setState({ survey : response.data.survey})
    // }
   

    fetchApi = () => {
        axios.get('http://localhost:3005/surveys/1')
        .then((response) => {
            // handle success
    
            console.log("iciiiiii", response);
    

            this.setState({ survey : response.data})
            
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
        console.log(this.state.survey)
        return(
            <div className="kickOffPage">
                  <h1>Kick-off Survey</h1>
                    <TexteDescriptif/>
                    <SurveyForm categories={this.state.survey} />
            </div>
        )
    }
    
}