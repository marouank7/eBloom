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
      type: "Everyday",
      survey_id: null ,
      question:"",
      category:"",
      company:"",
      score: 0
    }

  }

  handleClick = (value) => {
      this.setState({
        score: value
      })

      axios({
        method: 'post',
        url: 'http://localhost:3005/feedbacks',
        headers: {
          'Content-Type': ' application/json'
        },
        data: {
          ...this.state,
          score: value,
          date: moment().format("YYYY-MM-DD")
        }
      })
      .then((response) => {
        setTimeout(() => {
          this.props.history.push(`/employee/thankyou/${this.props.match.params.company}`)
          //this.getElementByTagName("html").style.pointer = "loader"
        }, 444);
        setTimeout()

      }).catch(error => {})
  }

  fetchQuestionToday = (day, date) => {
    const name = this.props.match.params.company || this.props.company;
    const formated = moment(date).format("YYYY-MM-DD");
    const andDay =  day ? `&day=${day}` : '' ;
    const andDate = date ? `&date=${formated}` : '' ;
      // Make a request for a user with a given ID
    axios.get(`http://localhost:3005/surveys/question-today?type=everyday&company=${name}${andDate}${andDay}`)
      .then((response) => {
        // handle success
        this.setState({
          survey_id: response.data[1],
          question: response.data[0].text,
          category: response.data[0].category,
          company: name.toLowerCase()
        });
      })
      .catch((error) => {
        // handle error
        this.setState({
          survey_id: null,
          question: "",
          category: "",
          company: name.toLowerCase()
        });
      })
        .finally(function () {
        // always executed
        // this.setState({})
      });
  }

  // Serveur tu créer une route qui
  componentDidMount() {
    // 1 axios get a la route /api/dailyquestion
    //let { id } = useParams();
        //console.log(this.props, "DATE in Day")
    this.fetchQuestionToday(this.props.day, this.props.date);
  }
  componentWillReceiveProps({day, date}) {
     // console.log("REREREREREndering ", day, date)
    this.fetchQuestionToday(day, date);
  }
  componentDidUpdate(){
    //console.log("state 43", this.state, this.props.date)
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
