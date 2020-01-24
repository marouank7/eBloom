import React , {useState, useEffect} from 'react';
import './styles/BoxQR.css';
import axios from 'axios';
import QuestionSurvey from './QuestionSurvey';
import NotImportant from './NotImportant';
import Stars from './Stars';

/*BoxQR displays the question features and its sentence. */
//__Button process
    // Quand on tente de répondre : cela crée une nouvelle réponse dans la liste. 
    // il faut générer des clefs de position pour chaque boxQR
    // je passe en props une fonction qui récupère la note des étoiles...
    

// 2) toggle function set -1  (affiche valid not important) / 0 (reset button display)
// 3) reste ( différent de -1 donc reset button not important display).


    // => dans ce cas, toggle function du not Important display  dans BoxQR . 
    // =>=> le look de not important dépend du state de BoxQr, son action onClick de la fonction parente

const BoxQR = ({coordonates, data, surveyID}) => {

    const size =  5 ; // could be set from a props number
    const [score, setScore] = useState([-2,size]) ;
    //rustine
    const [didMount, setDidMount] = useState(false);

    // coordonates  :: [stageIndex, lineIndex] ;
    // une fonction est passé en props et récupère le score et les coordonées lors d'une submission/click.
    // const changeScore = (ratio) => {
    //     if(ratio === score) {
    //         return;
    //     }
    //     setScore(ratio);     
    // }

//__Life cycle
// let finalArray = []
// console.log(finalArray)

    //rustine : 
    const guessCategoryBox = () => {
        const categs = ['Individual', 'Team', 'Company'];
        return categs[coordonates[0]];
    }

    const postAnswer = () => {
        const answerSet = {
            question : data.question,
            answer : score[0],
            question_id : surveyID,
            category : guessCategoryBox() , 
        }
        axios.post("http://localhost:3005/feedbacks", answerSet)
        .then(res => console.log(res))
    }

useEffect( 
    () => { 
            console.log(coordonates, "coordonates");
            //finalArray[coordonates[0]] = { [`${coordonates[1]}`] : score[0] }
            console.log(`You changed the score at ${coordonates[0]}° category , ${coordonates[1]}° question : ` + score)
            //console.log(guessCategoryBox())
            postAnswer() ;
    }, [score] );


    return(
        <div className="boxqr">
            <QuestionSurvey theQuestion={data.question}/> {/** >>>>>>>>>>>>> Sentence may be replaced in function of the JSON */}
            <Stars forSubmission={setScore} scoring={score}/>
            <NotImportant dumpScore={setScore} scoring={score}/>
        </div>
    )
}

export default BoxQR;


//=============================

// import React from 'react';
// import './styles/BoxQR.css';
// import QuestionSurvey from './QuestionSurvey';
// import NotImportant from './NotImportant';
// import Star from './Stars';

// class BoxQR  extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log('Dat for a box', props)
//         this.state = {
//             score : [-2,0],
//         }
//         this.target = props.coordonates
//     }
//     // this.props.coordonates  :: [stageIndex, lineIndex] ;
//     // une fonction est passé en props et récupère le score et les coordonées lors d'une submission/click.
//     changeScore = (ratio) => {
//         this.setState({score : ratio})
            
//     }

//     componentDidUpdate() {
//         console.log(`You changed the score at ${this.target[0]}° category , ${this.target[1]}° question : ` + this.state.score)
//     }


//    render() {
//     return(
//         <div className="boxqr">
//            <QuestionSurvey theQuestion={this.props.data.question}/> {/** >>>>>>>>>>>>> Sentence may be replaced in function of the JSON */}
//            <Star forSubmission={this.changeScore}/>
//             <NotImportant dumpScore={this.changeScore} scoring={this.state.score}/>
//         </div>
//     )
//    }  
// }

// export default BoxQR;