import React from "react";
import { shallow, mount } from "enzyme";
import QuestionSection from ".";

describe("<questionSection />", () => {
    afterEach(() => {
        spyOnHighOrLow.mock.calls = [];
        spyOnGetQuestionIndexArray.mock.calls = [];
      });

    const spyOnCompareAnswers = jest.fn();
    const spyOnHighOrLow = jest.fn(); 
    const spyOnGetQuestionIndexArray = jest.fn();
    spyOnGetQuestionIndexArray.mockReturnValue([1,2,3]);
    
    const mockNumberOfQuestions = 3;
    
    const mockProps = {}  
    mockProps.setHighOrLow=spyOnHighOrLow;
    mockProps.key=mockNumberOfQuestions.toString();
    mockProps.questionNumber=mockNumberOfQuestions;
    mockProps.questionKeys=Array.from(Array(mockNumberOfQuestions)).map((e,i)=>i);
    mockProps.questionList=[
        "Question A",
        "Question B",
        "Question C",
        "Question D",
        "Question E",
    ];
    mockProps.getQuestionIndexArray = spyOnGetQuestionIndexArray;

    it("renders without crashing", () => {
    shallow(<QuestionSection {...mockProps}/>);
    });
    
    it("should fire the highOrLow helper on mounting", () => {
    shallow (<QuestionSection {...mockProps} />);
    expect(spyOnHighOrLow.mock.calls.length).toBe(1);
    });

    it("should call the getQuestionsIndexArray helper", () => {
        shallow (<QuestionSection {...mockProps} />);
        expect(spyOnGetQuestionIndexArray.mock.calls.length).toBe(1);
  });



   it("should only have one instance of any specific question ", () => {
  
  }); 

});
