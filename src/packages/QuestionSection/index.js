import React, { Component } from "react";
import QuestionInputGroup from "./components/QuestionInputGroup";

class QuestionSection extends Component {

  componentDidMount(){
    this.props.setHighOrLow();
  }

  render() {
    const questionKeys = this.props.questionKeys;
    const questionList = questionKeys.map(questionNumber => (
      <QuestionInputGroup
        key={questionNumber.toString()}
        questionNumber={questionNumber}
        handleAnswerChange={this.props.handleAnswerChange}
        playerOneAnswer={this.props.playerOneAnswer}
        playerTwoAnswer={this.props.playerTwoAnswer}
      />
    ));

    return <ul className="questions-wrapper">{questionList}</ul>;
  }
}

export default QuestionSection;
