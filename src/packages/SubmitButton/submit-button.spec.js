import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon'
import SubmitButton from '.';

describe('<SubmitButton  />', ()=> {
    it('renders without crashing', () => {
        shallow(<SubmitButton />);
      });

    it('has the correct text on page load', () => {
    const expectedText = 'test';
    const testButton = shallow(<SubmitButton text={expectedText} />);
    expect(testButton.text().includes(expectedText)).to.be.true;
    });

    it('fires the correct function', () => {
      const onClickTest = sinon.spy();
      const testButton = shallow(<SubmitButton handleClick={onClickTest} />);
      testButton.simulate('click');
      expect(onClickTest.called).to.equal(true);  
    });


})
