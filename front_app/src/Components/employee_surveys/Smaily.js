
import React from 'react';
import './Smaily';
import axios from 'axios';
import './styles/Smaily.css';
import BoxQRDay from './BoxQRDay';

class Smaily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: 0
    };
  }

  handleClick = (value) => {
    console.log("yo")
    console.log(value);


    this.setState(state => ({
      answer: value
    }));

    //Axios post à /responss sur le serveur
    axios({
      method: 'post',
      url: 'http://localhost:3005/responses',
      headers: {
        'Content-Type': ' application/json'
      },
      data:this.state
    })
    .then((response) => {
      console.log(response)
    }).catch(error => console.log(error))

  }


  // Serveur tu créer une route qui console.log la valeur envoyée.
  componentDidMount() {
    // 1 axios get a la route /api/dailyquestion


      // Make a request for a user with a given ID
    axios.get('http://localhost:3005/dailyquestion')
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({question : response.data});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }

  render() {

    return(
      <>
        {/* <h2>{'Je suis le chiffre selectionné ' + this.state.answer}</h2> */}

        <div className="smailyPage">
          <div className="smallEbloom"></div>
          <div className="dailyQuestion">
            <BoxQRDay theQuestionOfDay={this.state.question} />
          </div>
          <div className="iconeSmaily">
            <div 
              className={`smaily1 basic_smil ${this.state.answer == 1 ? `active` : ` `}`} 
              onClick={() => this.handleClick(1)}>
            </div>
            <div 
              className={`smaily2 basic_smil ${this.state.answer == 2 ? `active` : ` `}`}
              onClick={() => this.handleClick(2)}> 
            </div>
            <div 
              className={`smaily3 basic_smil ${this.state.answer == 3 ? `active` : ` `}`}
              onClick={() => this.handleClick(3)}>
            </div>
            <div 
              className={`smaily4 basic_smil ${this.state.answer == 4 ? `active` : ` `}`} 
              onClick={() => this.handleClick(4)}>
            </div>
            <div 
              className={`smaily5 basic_smil ${this.state.answer == 5 ? `active` : ` `}`} 
              onClick={() => this.handleClick(5)}>
            </div>
          </div>
        
        </div>
      </>
    )
  }
  
}

export default Smaily;