import React from 'react';
import './styles/BoxQR.css';
import QuestionSurvey from './QuestionSurvey';
import NotImportant from './NotImportant';
import Star from './Stars';

/*BoxQR displays the question features and its sentence. */
//__Button process
    // Quand on tente de répondre : cela crée une nouvelle réponse dans la liste. 
    // il faut générer des clefs de position pour chaque boxQR
    // je passe en props une fonction qui récupère la note des étoiles...
    

// 2) toggle function set -1  (affiche valid not important) / 0 (reset button display)
// 3) étoile set une valeur 1 à 5 ( différent de -1 donc reset button not important display).


    // => dans ce cas, toggle function du not Important display  dans BoxQR . 
    // =>=> le look de not important dépend du state de BoxQr, son action onClick de la fonction parente

class BoxQR  extends React.Component {
    constructor(props) {
        super(props)
        console.log('Dat for a box', props)
        this.state = {
            score : [-2,0],
        }
        this.target = props.coordonates
    }
    // this.props.coordonates  :: [stageIndex, lineIndex] ;
    // une fonction est passé en props et récupère le score et les coordonées lors d'une submission/click.
    changeScore = (ratio) => {
        this.setState({score : ratio})
            
    }

    componentDidUpdate() {
        console.log(`You changed the score at ${this.target[0]}° category , ${this.target[1]}° question : ` + this.state.score)
    }
    // noScore = (event) => {
    //     this.setState({score : [0,0] })
    // }

   render() {
    return(
        <div className="boxqr">
           <QuestionSurvey theQuestion={this.props.data.question}/> {/** >>>>>>>>>>>>> Sentence may be replaced in function of the JSON */}
           <Star forSubmission={this.changeScore}/>
           <NotImportant resetScore={this.changeScore}/>
        </div>
    )
   }  
}

export default BoxQR;