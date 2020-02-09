import React from 'react';
import axios from 'axios';
import './Smaily.css';
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

      }).catch(error => {})
    });
  }


  // Serveur tu créer une route qui
  componentDidMount() {
    // 1 axios get a la route /api/dailyquestion


      // Make a request for a user with a given ID
    axios.get('http://localhost:3005/surveys/question-today/')
      .then((response) => {
        // handle success

        this.setState({question : response.data});
      })
      .catch(function (error) {
        // handle error

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
