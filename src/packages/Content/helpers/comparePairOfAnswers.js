export function comparePairOfAnswers() {

  //Check for tie condition and return null, initial state is set for a tie

  if (this.state.playerOne.firstAnswer === this.state.playerTwo.firstAnswer) {
    return null;
  } 
  
  //determine who has the higher answer

  let playerOneHasHigherAnswer = this.state.playerOne.firstAnswer > this.state.playerTwo.firstAnswer;

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