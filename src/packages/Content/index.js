import React, { Component } from "react";
import QuestionSection from "../QuestionSection";
import SubmitButton from "../SubmitButton";
import ResultsSection from "../ResultsSection";
import { setHighOrLow } from "./helpers/setHighOrLow";

class Content extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      answered: false,
      buttonText: "Break Tie",
      highWins: false,
      playerOne: 0,
      playerTwo: 0,
      winner: undefined
    };
    this.state = this.initialState;
    this.submitAnswers = this.submitAnswers.bind(this);
    this.resetTieBreaker = this.resetTieBreaker.bind(this);
    this.setHighOrLow = setHighOrLow.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }


  handleAnswerChange(receivedAnswer, receivedName) {
    this.setState(() => ({
      [receivedName]: receivedAnswer
    }));
  }

  testAnswers() {

    //Check for tie condition and return null, initial state is set for a tie

    if (this.state.playerOne === this.state.playerTwo) {
      return null;
    } 
    
    //determine who has the higher answer
    let playerOneHasHigherAnswer = this.state.playerOne > this.state.playerTwo;

    if ((this.state.highWins === playerOneHasHigherAnswer)) {
      this.setState({
        winner: "Player One"
      });
    } else {
      this.setState({
        winner: "Player Two"
      });
    }
  }

  clickFunctionSplitter() {
    if (this.state.answered === false) {
      this.submitAnswers();
    } else {
      this.resetTieBreaker();
    }
  }

  submitAnswers() {
    this.testAnswers();
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
    let displayedContent;
    if (this.state.answered) {
      displayedContent = (
        <ResultsSection
          winner = {this.state.winner}
          testAnswers = {this.testAnswers}
          whoWins = {this.state.highWins}

        />
      );
    } else {
      displayedContent = (

        <QuestionSection
          playerOneAnswer={this.state.playerOne}
          playerTwoAnswer={this.state.playerTwo}
          handleAnswerChange={this.handleAnswerChange}
          setHighOrLow={this.setHighOrLow}
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
