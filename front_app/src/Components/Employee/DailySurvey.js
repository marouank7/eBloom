import React from 'react';
import axios from 'axios';
import './styles/Smaily.css';
import BoxQRDay from './BoxQRDay';
import AnswerSmileys from './AnswerSmileys';

class DailySurvey extends React.Component {
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


    this.setState({ answer: value}, ()=> {
      axios({
        method: 'post',
        url: 'http://localhost:3005/feedbacks',
        headers: {
          'Content-Type': ' application/json'
        },
        data:this.state
      })
      .then((response) => {
        console.log(response)
      }).catch(error => console.log(error))
    });
  }


  // Serveur tu créer une route qui console.log la valeur envoyée.
  componentDidMount() {
    // 1 axios get a la route /api/dailyquestion

    console.log("shall axios")
      // Make a request for a user with a given ID
    axios.get('http://localhost:3005/surveys/question-today?type=everyday&company=Proximus')          //>>>>>>>>>default name for company ! //
      .then((response) => {
        // handle success
        console.log("Hello question of the day" ,response.data);
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
        <div className="smailyPage" style={this.props.localStyleChanges}>
          <div className="smallEbloom"></div>
            <AnswerSmileys submitAnswer={this.handleClick} {...this.state} />
        </div>
      </>
    )
  }

}

export default DailySurvey;
