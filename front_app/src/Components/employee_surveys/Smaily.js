import React from 'react';
import './Smaily';
import axios from 'axios'
import './styles/Smaily.css';
import BoxQRDay from './BoxQRDay';

class Smaily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'Il règne une bonne entente entre collègues...',
      answer: 0
    };
  }

  // Une fonction qui se declenche quand je click sur un bouton
  // Cette fonction prend en parametre la valeur du bouton
  // Axios post /todayAnswer

  // Serveur tu créer une route qui console.log la valeur envoyée.
  componentDidMount() {
    // 1 axios get a la route /api/dailyquestion
    const axios = require('axios');

// Make a request for a user with a given ID
    axios.get('http://localhost:5000/api/dailyquestion')
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
    // 2 Creer une route au niveau du serveur /api/dailyquestion
    // A l'interieur de cette route, renvoyer au client, en res.json, une string avec la question
    // Au niveau de react, console.loguer cette reponse
    // Modifier le state de cette question avec la res
  }

  render() {
    return(

      <div className="smailyPage">
        <div className="smallEbloom"></div>
        <div className="dailyQuestion">
          <BoxQRDay theQuestionOfDay={this.state.question} />
        </div>
        <div className="iconeSmaily"></div>
        


      </div>
    )
  }
  
}

export default Smaily;