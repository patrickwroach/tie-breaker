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

   it("should reset all elements of state when the buttonSection button reads Reset", () => {
    const wrapper = shallow(<Content />);
    const instance = wrapper.instance();
    const initialState = {
      answered: wrapper.state("answered"),
      buttonText: wrapper.state("buttonText")
    };

    //Call submitAnswers once, to set up a completed survey
    instance.clickFunctionSplitter();
    //Call again to reset;
    instance.clickFunctionSplitter();

    expect(wrapper.state("buttonText")).toMatch(initialState.buttonText);
    expect(wrapper.state("answered")).toBe(initialState.answered);
  }); 

});
