import React, {Component, useState, useEffect} from 'react';


// const NotImportant = ({ dumpScore, scoring}) => {
// console.log("re-render: ", scoring);
// //__Building state
//     let points , range ;
//     [points , range] = scoring ;
//     const [score, setScore] = useState([11, range]) ;
//     const [signClick, setSignClick] = useState(false) ;
//     const [beforeUpload, setBeforeUpLoad] = useState(true) ;
    
//     // if(beforeUpload) {  // la data descend et mets à jour le score.
//     //     setScore(scoring);
//     //     setBeforeUpLoad(false) // la mise à jour crée un re-rendering
//     // }  elsle if sign ou before ...setBeforeUpLoad. $ et trouver une place ou remettre before à true
//     console.log("re-render hook: ", score);

//     //let signClick = false ;

// //__Actions 
//     const isGoodToDump = value => value !== -1 ? true : false ;

//     const setScoreOnEvent = (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//         setSignClick( signClick ? false : true);
//         if( isGoodToDump(score[0]) ) setScore([-1, range]);
//         else setScore([0, range]);
//     }

// //__Life cycle
//     useEffect( () =>  { {dumpScore(score) } }, [signClick]) // dumpScore on click

// //__On rendering
//     return(

//         <div className= { score[0] === -1 ? "not-important bold" : "not-important"} onClick={(e) => setScoreOnEvent(e)}> 
//             <span className="checker" style={{display: score[0] === -1 ? "none" : "inline-block"}}>&#x2609;</span>
//             <span className="checker" style={{display: score[0] !== -1 ? "none" : "inline-block"}}>&#x2611;</span>
//             Not Important {score[0]}
//         </div>
//     )
    
// }

// export default NotImportant;

class NotImportant extends Component  {

    constructor(props) {
        super(props);
        this.upLoadScore = props.dumpScore ;
        this.state = {
            score : props.scoring,
        }
        console.log(this.score, "was the props.")
    } //__End of constructor__

    
//__Actions on event
    isGoodToDump = value => value > -1 ? true : false ;

    setScoreOnEvent = (event) => {
        // event.preventDefault();
        // event.stopPropagation();
        var score = this.props.scoring ;
        const range = score[1];
        if( score[0] === 0) {
            this.setState({score : [-1, range]}
                , () => this.upLoadScore([-1, range])); 
        } else {
            this.setState({score : [0, range]}
                , () => this.upLoadScore([0, range])); 
        }
    }

//__Life cycle
componentDidMount() {
    console.log(this.state.score , this.props.scoring)
}
componentDidUpdate() {
    console.log(this.props.scoring, " props after 'not import' update");
    //this.setState({score : this.props.scoring}) ;
    console.log("this is the state after 'not important' update: ", this.state.score)
}

    //__On rendering
    render() {
        var score = this.props.scoring ;
        return(
            <div className= { score[0] === -1 ? "not-important bold" : "not-important"} onClick={(e) => this.setScoreOnEvent(e)}> 
                <span className="checker" style={{display: score[0] === -1 ? "none" : "inline-block"}}>&#x2609;</span>
                <span className="checker" style={{display: score[0] !== -1 ? "none" : "inline-block"}}>&#x2611;</span>
                Not Important {score[0]}
            </div>
        )
    } 
}
// }= ({ dumpScore, scoring}) => {
//     console.log("re-render: ", scoring);
//     //__Building state
//         let points , range ;
//         [points , range] = scoring ;
//         const [score, setScore] = useState([11, range]) ;
//         const [signClick, setSignClick] = useState(false) ;
//         const [beforeUpload, setBeforeUpLoad] = useState(true) ;
        
//         // if(beforeUpload) {  // la data descend et mets à jour le score.
//         //     setScore(scoring);
//         //     setBeforeUpLoad(false) // la mise à jour crée un re-rendering
//         // }  elsle if sign ou before ...setBeforeUpLoad. $ et trouver une place ou remettre before à true
//         console.log("re-render hook: ", score);
    
//         //let signClick = false ;
    
//     //__Actions 
//         const isGoodToDump = value => value !== -1 ? true : false ;
    
//         const setScoreOnEvent = (event) => {
//             event.preventDefault();
//             event.stopPropagation();
//             setSignClick( signClick ? false : true);
//             if( isGoodToDump(score[0]) ) setScore([-1, range]);
//             else setScore([0, range]);
//         }
    
//     //__Life cycle
//         useEffect( () =>  { {dumpScore(score) } }, [signClick]) // dumpScore on click
    
//     //__On rendering
//         return(
    
//             <div className= { score[0] === -1 ? "not-important bold" : "not-important"} onClick={(e) => setScoreOnEvent(e)}> 
//                 <span className="checker" style={{display: score[0] === -1 ? "none" : "inline-block"}}>&#x2609;</span>
//                 <span className="checker" style={{display: score[0] !== -1 ? "none" : "inline-block"}}>&#x2611;</span>
//                 Not Important {score[0]}
//             </div>
//         )
        
//     }
    
   export default NotImportant;