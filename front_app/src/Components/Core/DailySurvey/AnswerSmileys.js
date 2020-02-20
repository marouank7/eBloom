
import React, { Component } from 'react';
import './Smaily.css';
// import BoxQRDay from './BoxQRDay';


class AnswerSmileys extends Component {
  render() {
    return(
      <>
          <div className="dailyQuestion">
          <h1>{this.props.question}</h1>
          {/* <BoxQRDay theQuestionOfDay={this.props.question} /> */}
          </div>
          <div className="iconeSmaily">
            <div
              className={`smaily1 basic_smil ${this.props.score === 1 ? `active` : ` `}`}
              onClick={() => this.props.submitAnswer(1)}>
            </div>
            <div
              className={`smaily2 basic_smil ${this.props.score === 2 ? `active` : ` `}`}
              onClick={() => this.props.submitAnswer(2)}>
            </div>
            <div
              className={`smaily3 basic_smil ${this.props.score === 3 ? `active` : ` `}`}
              onClick={() => this.props.submitAnswer(3)}>
            </div>
            <div
              className={`smaily4 basic_smil ${this.props.score === 4 ? `active` : ` `}`}
              onClick={() => this.props.submitAnswer(4)}>
            </div>
            <div
              className={`smaily5 basic_smil ${this.props.score === 5 ? `active` : ` `}`}
              onClick={() => this.props.submitAnswer(5)}>
            </div>
          </div>
      </>
    )
  }

}

export default AnswerSmileys;
