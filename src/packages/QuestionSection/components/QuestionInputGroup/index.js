import React, { Component } from "react";
import Question from "../Question";
import InputPair from "../InputPair";

class QuestionInputGroup extends Component {
  render() {
    return (
      <div className="question-section">
        <Question />
        <InputPair
          handleAnswerChange={this.props.handleAnswerChange}
          playerOneAnswer={this.props.playerOneAnswer}
          playerTwoAnswer={this.props.playerTwoAnswer}
        />
      </div>
    );
  }
}

export default QuestionInputGroup;
