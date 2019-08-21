import React from "react";
import { shallow } from "enzyme";
import Content from ".";
import { getUnpackedSettings } from "http2";

describe("<Content />", () => {
  const wrapper = shallow(<Content />);
  const instance = wrapper.instance();

  it("renders without crashing", () => {
    shallow(<Content />);
  });


  it("should update buttonSection text on submitting answers ", () => {
    expect(wrapper.state("buttonText")).to.eql("Break Tie");
    instance.clickFunctionSplitter();
    expect(wrapper.state("buttonText")).to.eql("Reset");
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

    expect(wrapper.state("buttonText")).to.eql(initialState.buttonText);
    expect(wrapper.state("answered")).to.eql(initialState.answered);
  });

});
