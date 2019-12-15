import React, {Component} from 'react';
import './styles/Stars.css'

class Star extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active : false
        }
    }

    handleChange = (event) => {
        console.log(event.target.id)

        this.setState({[event.target.id] : "lml"});
        console.log(this.state)
        
    }
    

    render() { 
        return (  

            <div className="stars">
               <div className="star active"></div>
               <div className="star active"></div>
               <div className="star"></div>
               <div className="star"></div>
               <div className="star"></div>
            </div>
        );
    }
}
 
export default Star;










