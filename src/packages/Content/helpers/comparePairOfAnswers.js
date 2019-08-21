export function comparePairOfAnswers() {

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