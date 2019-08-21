import React, { Component } from 'react';
 
class InputPair extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const answer = e.target.value;
    const targetName = e.target.name;
    this.props.handleAnswerChange(answer, targetName);
  }

 render() {
    return (
        <ul className="answers">
         <li className="player">
            <label>Player One</label>
            <input type="number" name="playerOne" onChange={this.handleChange} value={this.props.playerOneAnswer}/>
          </li>
          <li className="player">
            <label>Player Two</label>
            <input type="number" name="playerTwo" onChange={this.handleChange} value={this.props.playerTwoAnswer} />
          </li>
        </ul>
    )
  }
}

export default InputPair;