import React from 'react';
import { shallow } from 'enzyme';
import ResultsSection from '.';

describe('<Results  />', ()=> {
    it('renders without crashing', () => {
        shallow(<ResultsSection />);
      });
      
      it('displays the correct winner', () => {
        const testWinner = "playerTwo"
        const resultsTest = shallow(<ResultsSection winner = {testWinner} />);
        expect(resultsTest.text().includes(testWinner)).to.be.true;
      });

      it('displays the correct tie text when a winner is undefined', () => {
        const testTieText= "A tie! Gooooddddamn, what is even the point of this site";
        const testWinner = undefined;
        const resultsTest = shallow(<ResultsSection winner = {testWinner} />);
        expect(resultsTest.text().includes(testTieText)).to.be.true;
      });

})
