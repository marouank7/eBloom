import React, {useState, useEffect} from 'react';
//import './styles/Stars.css'

const  Star = (props) =>  {

//__Building program at start

    let points , range ;
    [points , range] = props.scoring ;
    const [score, setScore] = useState([-2, range]) ;

    const buildStarsList = (yinYang) => {

        // with size = 5 :: bubble meaning for each stars range
        const meanings = ["reset score","little agreement", "quite agree", "agree", "good agreement", "total agree"]
        const aList = [];

        // spread the number of stars which equals size.
        for(let i = 1 ; i <= yinYang[1] ; i++) { 
            let adding = <div  id={i} className="star" title={meanings[i]}>
                             &#x2606;
                        </div>;

            // over-writes the shape of each star spread before the splitting value between the Yin and the Yang.
            if (i <= yinYang[0]) {
                adding = <div  id={i} className="star" title={meanings[i]}>
                            &#x2605;
                        </div> ;
            }
            
            aList.push( adding );
        }
        return aList ;
   }

//__Button process
    const setScoreOnEvent = ({target}) =>  {
        setScore(
            [ parseInt(target.id) || 0,  range] ,  
        );
    }

//__Life cycles
    useEffect( () => props.forSubmission(score), [score] )

//__On rendering
        return (  
            <div className="stars" onClick={setScoreOnEvent}>
               {buildStarsList(score)}
            </div>
        );
}
 
export default Star;



//============================================================================

// import React, {Component} from 'react';
// //import './styles/Stars.css'

// class Star extends Component {

// //__Building program at start
//     constructor(props) {
//         super(props);
//         this.size =  5 ; // could be set from a props number
//         this.state = { 
//             score : [-2,this.size],
//         }
//         // // componentDidUpdate() has code that triggers a parent rendering, thus it gets activated again... firing an infinate loop rendering.
//         // this.toggleUpdate = false; // This variable nest and hide the trigger. So, it can be read only on request (onClick(), here).
        
//     }

//     buildStarsList = (yinYang) => {

//         // with this.size = 5 :: bubble meaning for each stars range
//         const meanings = ["reset score","little agreement", "quite agree", "agree", "good agreement", "total agree"]
//         const aList = [];

//         // spread the number of stars which equals this.size.
//         for(let i = 1 ; i <= yinYang[1] ; i++) { 
//             let adding = <div  id={i} className="star" title={meanings[i]}>
//                              &#x2606;
//                         </div>;

//             // over-writes the shape of each star spread before the splitting value between the Yin and the Yang.
//             if (i <= yinYang[0]) {
//                 adding = <div  id={i} className="star" title={meanings[i]}>
//                             &#x2605;
//                         </div> ;
//             }
            
//             aList.push( adding );
//         }
//         return aList ;
//    }

// //__Actions controlled with state
//    sendUpOnGo = () => {
//      this.props.forSubmission(this.state.score);
//     //this.toggleUpdate = false ;
//    }

// //__Button process
//     setScoreOnEvent = ({target}) =>  {
//         this.toggleUpdate = true ;
//         this.setState({
//                 score : [target.id || 0,
//                         this.size]
//             },
//             () => this.sendUpOnGo()
//         );
//     }

// //__Life cycles
//     componentWillUpdate() {
//         //console.log('before updating: ' + this.state.score);
//     }

//     componentDidUpdate() {
//         let points = this.state.score[0];
//         console.log("score :", this.state.score) ;
//         console.log('The score is ' + points + '/' + this.size);

//         // if(this.toggleUpdate) this.props.forSubmission(this.state.score);
//         // this.toggleUpdate = false ;

       
//     }

// //__On rendering
//     render() { 
//         //this.props.forSubmission(this.state.score);
//         return (  
//             <div className="stars" onClick={this.setScoreOnEvent}>
//                {this.buildStarsList(this.state.score)}
//             </div>
//         );
//     }
// }
 
// export default Star;


