
//============================================================================

import React, {Component} from 'react';
import './styles/Stars.css'

class Star extends Component {
    constructor(props) {
        super(props);
        this.size =  5 ; // a props number
        this.state = { 
            score : 0 ,
        }
        
    }

    resetState = (event) => { this.setState({score:0}) };

    buildStarsListOf = (howWide, whichPoint) => {
        let aList = [   <div id={0} 
                                className={whichPoint > 0 ?   "reset-bt possible" : "reset-bt hidden"}
                                onClick={this.resetState}     
                        > 
                            <span>&#60;</span> 
                        </div>
        ];
        const meanings = ["reset score","little agreement", "quite agree", "agree", "good agreement", "total agree"]
        for(let i = 1 ; i <= howWide ; i++) {
            let adding = <div  className="star" title={meanings[i]} ><i id={i} class="fas fa-star fa" style={{"font-size":"30px","color":"white"}}></i> </div>;
            if (whichPoint >= i) adding = <div   className="star"><i id={i} class="fas fa-star fa-2x" ></i> </div> ;
                aList.push( adding )  //<div  id={i} title={meanings[i]} className={whichPoint >= i ? "star active" : "star" }></div>
        }
        return aList ;
   }

    
    setScoreOnEvent = ({target}) => this.setState({score : target.id }) ;

    componentWillUpdate() {
        //console.log('before updating: ' + this.state.score);
    }

    componentDidUpdate() {
        let points = this.state.score  || 0 ;
        console.log('The score is ' + points + '/' + this.size);
        //this.forSubmission
    }

    render() { 
        let {score} = this.state ;
        return (  

            <div className="stars" onClick={this.setScoreOnEvent}>
               {this.buildStarsListOf(this.size, score)}
            </div>
        );
    }
}
 
export default Star;