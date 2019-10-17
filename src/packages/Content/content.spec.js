import React from "react";
import { shallow } from "enzyme";
import Content from ".";

describe("<Content />", () => {

  it("renders without crashing", () => {
   shallow(<Content />);
  });


  it("should update buttonSection text on submitting answers ", () => {
    const wrapper = shallow(<Content />);
    const instance = wrapper.instance();
    expect(wrapper.state("buttonText")).toMatch(/Break Tie/);
    instance.clickFunctionSplitter();
    expect(wrapper.state("buttonText")).toMatch(/Reset/);;
  });

   it("should have reset all elements of state after the Button Component has been clicked a second time ", () => {
    const wrapper = shallow(<Content />);
    const instance = wrapper.instance();
    const initialState = {
      answered: wrapper.state("answered"),
      buttonText: wrapper.state("buttonText"),
      highWins: wrapper.state("highWins"),
      playerOne: wrapper.state("playerOne"),
      playerTwo: wrapper.state("playerTwo"),
      questionIndex: wrapper.state("questionIndex"),
      winner: wrapper.state("winner"),
      numOfQuestion: wrapper.state("numOfQuestion"),
    };

    //Call submitAnswers once, to set up a completed survey
    instance.clickFunctionSplitter();

    //Call again to reset;
    instance.clickFunctionSplitter();

    expect(wrapper.state()).toEqual(initialState);
  }); 

});
