import React, { Component } from "react";
import QuestionSection from "../QuestionSection";
import SubmitButton from "../SubmitButton";
import ResultsSection from "../ResultsSection";

import { setHighOrLow } from "./helpers/setHighOrLow";
import { getQuestionIndexArray} from "./helpers/getQuestionIndexArray"
import { compareAnswers} from "./helpers/compareAnswers";
import { numericalQuestionList } from "../../assets/constants/bulkQuestionList"

class Content extends Component {
  constructor(props) {
    super(props);
    this.defaultNumberOfQuestions = 3;
    this.initialState = {
      answered: false,
      buttonText: "Break Tie",
      highWins: new Array(this.defaultNumberOfQuestions).fill(false),
      playerOne: new Array(this.defaultNumberOfQuestions).fill(0),
      playerTwo: new Array(this.defaultNumberOfQuestions).fill(0),
      questionIndex: [],
      winner: undefined,
      //eventually users should be able to set their own number of questions
      numOfQuestion: this.defaultNumberOfQuestions,
    };
    this.state = this.initialState;
    this.submitAnswers = this.submitAnswers.bind(this);
    this.resetTieBreaker = this.resetTieBreaker.bind(this);
    this.setHighOrLow = setHighOrLow.bind(this);
    this.compareAnswers = compareAnswers.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.getQuestionIndexArray = getQuestionIndexArray.bind(this);
  }
 
  handleAnswerChange(receivedAnswer, receivedName, receivedQuestionNumber) {
    const newAnswers = this.state[receivedName];
    const answerUnstrung = (receivedAnswer != '') ? Number(receivedAnswer): '';
    newAnswers[receivedQuestionNumber] = answerUnstrung;
      this.setState(() => ({
        [receivedName]: newAnswers
      }));

  }

  clickFunctionSplitter() {
    if (this.state.answered === false) {
      this.submitAnswers();
    } else {
      this.resetTieBreaker();
    }
  }



  submitAnswers() {
    this.compareAnswers();
    const answerStatus = true;
    const newButtonText = "Reset";
    this.setState({
      answered: answerStatus,
      buttonText: newButtonText
    });
    
  }

  resetTieBreaker() {
    this.setState(this.initialState);
  }

  displayedContent(){
    if (this.state.answered === true) {
      return <ResultsSection />;
    } else {
      return <QuestionSection />;
    }
  };

  

  render() {
    const questionKeys = Array.from(Array(this.state.numOfQuestion)).map((e,i)=>i)
    let displayedContent;
    if (this.state.answered) {
      displayedContent = (
        <ResultsSection
          winner = {this.state.winner}
          testAnswers = {this.compareAnswers}
          whatWon = {this.state.highWins}
          playerOneAnswer={this.state.playerOne}
          playerTwoAnswer={this.state.playerTwo}
          resultsKeys = {questionKeys}
        />
      );
    } else {
      displayedContent = (

        <QuestionSection
          playerOneAnswer={this.state.playerOne}
          playerTwoAnswer={this.state.playerTwo}
          handleAnswerChange={this.handleAnswerChange}
          setHighOrLow={this.setHighOrLow}
          getQuestionIndexArray={this.getQuestionIndexArray}
          questionList={numericalQuestionList}
          questionIndex={this.state.questionIndex}
          numOfQuestion={this.numOfQuestion}
          questionKeys = {questionKeys}
        />
      );
    }

    return (
      <div className="content">
        {displayedContent}
        <div className="button-wrapper">
          <SubmitButton
            text={this.state.buttonText}
            handleClick={() => this.clickFunctionSplitter()}
          />
        </div>
      </div>
    );
  }
}

export default Content;
