import React, { Component } from "react";

class ResultsSection extends Component {
  render() {
    return (
      <div className="results-section">
        <h1>
          {" "}
          {this.props.winner === undefined
            ? "A tie! Gooooddddamn, what is even the point of this site"
            : this.props.winner + " wins!"}
        </h1>
        <p>
          The {this.props.whoWins ? "higher" : "lower"} answer{" "}
          {this.props.winner === undefined ? "would have" : ""} won.
        </p>
      </div>
    );
  }
}

export default ResultsSection;
