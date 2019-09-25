import React from 'react';
import { shallow } from "enzyme";
import ResultsSection from '.';

const fillRangeWithAscendingNumbers = (start, end) => {
  return Array(end - start + 1).fill().map((item, index) => start + index);
};


describe('<Results  />', ()=> {
  const mockNumberOfQuestions = 3;
  const mockPlayerOneAnswers = Array(mockNumberOfQuestions).fill(0);
  const mockPlayerTwoAnswers = Array(mockNumberOfQuestions).fill(0);
  const mockWhatWon = Array(mockNumberOfQuestions).fill(0);
  const mockWinner = "Mock Player" 
  const mockResultsKey = fillRangeWithAscendingNumbers(0, mockNumberOfQuestions - 1 );
  const spyOnCompareAnswers = jest.fn();

  

    it('renders without crashing', () => {
        shallow(<ResultsSection
          winner = {mockWinner}
          testAnswers = {spyOnCompareAnswers}
          whatWon = {mockWhatWon}
          playerOneAnswer={mockPlayerOneAnswers}
          playerTwoAnswer={mockPlayerTwoAnswers}
          resultsKeys = {mockResultsKey}
        />);
      });
      
      it('displays the correct winner', () => {
        const testWinner = "playerTwo"
        const resultsTest = shallow(<ResultsSection winner = {testWinner} resultsKeys = {mockResultsKey} />);
        expect(resultsTest.text()).toContain(testWinner);
      });

      it('displays the correct tie text when a winner is undefined', () => {
        const testTieText= "A tie! Gooooddddamn, what is even the point of this site";
        const testWinner = undefined;
        const resultsTest = shallow(<ResultsSection winner = {testWinner} resultsKeys = {mockResultsKey} />);
        expect(resultsTest.text()).toContain(testTieText);
      });

})
