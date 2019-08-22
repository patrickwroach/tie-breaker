import React, { Component } from "react";
import QuestionSection from "../QuestionSection";
import SubmitButton from "../SubmitButton";
import ResultsSection from "../ResultsSection";
import { setHighOrLow } from "./helpers/setHighOrLow";
import { comparePairOfAnswers} from "./helpers/comparePairOfAnswers";

class Content extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      answered: false,
      buttonText: "Break Tie",
      highWins: false,
      playerOne: {
        firstAnswer: 0,
        secondAnswer: 0,
        thirdAnwer: 0
      },
      playerTwo: {
        firstAnswer: 0,
        secondAnswer: 0,
        thirdAnwer: 0
      },
      winner: undefined,
    };
    this.state = this.initialState;
    this.submitAnswers = this.submitAnswers.bind(this);
    this.resetTieBreaker = this.resetTieBreaker.bind(this);
    this.setHighOrLow = setHighOrLow.bind(this);
    this.comparePairOfAnswers = comparePairOfAnswers.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }


  handleAnswerChange(receivedAnswer, receivedName) {
    
      this.setState(() => ({
        [receivedName]: {
          firstAnswer : receivedAnswer
        }
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
    this.comparePairOfAnswers();
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
          testAnswers = {this.comparePairOfAnswers}
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
          numOfQuestion={this.numOfQuestion}
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
