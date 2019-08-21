import React, { Component } from "react";
import Question from "./components/Question";
import InputPair from "./components/InputPair";

class QuestionSection extends Component {
  
  componentDidMount(){
    this.props.setHighOrLow();
   }

  render() {
    return (
      <div className="questions-wrapper">
        <div className="question-section">
          <Question />
           <InputPair  handleAnswerChange={this.props.handleAnswerChange}  playerOneAnswer={this.props.playerOneAnswer} playerTwoAnswer={this.props.playerTwoAnswer}/>
        </div>
      </div>
    );
  }
}

export default QuestionSection;
