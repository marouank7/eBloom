import React from 'react';
import axios from 'axios';
import './Smaily.css';
import AnswerSmileys from './AnswerSmileys';
import {withRouter} from 'react-router-dom';
import moment from 'moment';

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
          //this.getElementByTagName("html").style.pointer = "loader"
        }, 1000);
        setTimeout()

      }).catch(error => {})
  }

  fetchQuestionToday = (day, date) => {
    const name = this.props.match.params.company || this.props.company;
    const formated = moment(date).format("YYYY-MM-DD");
      console.log("state 40", name)
    const andDay =  day ? `&day=${day}` : '' ;
    const andDate = date ? `&date=${formated}` : '' ;
      // Make a request for a user with a given ID
    axios.get(`http://localhost:3005/surveys/question-today?type=everyday&company=${name}${andDate}${andDay}`)
      .then((response) => {
        // handle success
        console.log("Got response from db for today !", response)
        this.setState({
          question: response.data.text,
          category: response.data.category,
          company: name.toLowerCase()
        });
      })
      .catch(function (error) {
        // handle error
      })
        .finally(function () {
        // always executed
      });
  }
  
  // Serveur tu créer une route qui
  componentDidMount() {
    // 1 axios get a la route /api/dailyquestion
    //let { id } = useParams();
    console.log(this.props, "DATE in Day")
    this.fetchQuestionToday(this.props.day, this.props.date);
  }
  componentWillReceiveProps({day, date}) {
    console.log("REREREREREndering ", day, date)
    this.fetchQuestionToday(day, date);
  }
  componentDidUpdate(){
    console.log("state 43", this.state, this.props.date)
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
