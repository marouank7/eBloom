import React from 'react';
import axios from 'axios';
import './Smaily.css';
import AnswerSmileys from './AnswerSmileys';
import {withRouter} from 'react-router-dom';

class DailySurvey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question:"",
      category:"",
      answer: 0
    }

  }

  handleClick = (value) => {
      this.setState({
        answer: value
      })

      axios({
        method: 'post',
        url: 'http://localhost:3005/feedbacks',
        headers: {
          'Content-Type': ' application/json'
        },
        data: {
          ...this.state,
          answer: value
        }
      })
      .then((response) => {
        setTimeout(() => {
          this.props.history.push('/thanks')
        }, 3000);
        setTimeout()

      }).catch(error => {})
  }




  // Serveur tu créer une route qui
  componentDidMount() {
    // 1 axios get a la route /api/dailyquestion
    //let { id } = useParams();
    const name = this.props.match.params.company;
      // Make a request for a user with a given ID
    axios.get(`http://localhost:3005/surveys/question-today?type=everyday&company=${name}`)
      .then((response) => {
        // handle success
        this.setState({
          question: response.data.text,
          category: response.data.category
        });
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
            <AnswerSmileys  submitAnswer={this.handleClick} {...this.state} />
        </div>
      </>
    )
  }

}

export default withRouter(DailySurvey);
