import React, { Component } from "react";
import QuestionInputGroup from "./components/QuestionInputGroup";


class QuestionSection extends Component {
  
  componentDidMount(){
    this.props.setHighOrLow();
   }
   

  render() {
    return (
      <ul className="questions-wrapper">
        <QuestionInputGroup
          handleAnswerChange={this.props.handleAnswerChange}
          playerOneAnswer={this.props.playerOneAnswer.firstAnswer}
          playerTwoAnswer={this.props.playerTwoAnswer.firstAnswer}
           />
      </ul>
    );
  }
}

export default QuestionSection;
