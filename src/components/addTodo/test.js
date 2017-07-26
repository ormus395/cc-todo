import React from "react";
// import ReactDOM from 'react-dom';
import { shallow, mount } from "enzyme";
import AddTodo from ".";

describe("AddTodo component", () => {
  let component;
  const submitMock = jest.fn();
  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={submitMock} />);
  });
  it("Should render a todo successfully", () => {
    expect(component.exists()).toEqual(true);
  });
  it("Should have one input", () => {
    expect(component.find(".todo-input").length).toEqual(1);
  });
  describe("AddTodo button", () => {
    it("Add todo button", () => {
      expect(component.find(".todo-submit").length).toEqual(1);
    });
    it("Should call them submitTodo function when clicked", () => {
      const component = mount(<AddTodo submitTodo={submitMock} />);
      expect(submitMock.mock.calls.length).toEqual(0);
      component.find("form").simulate("submit");
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});
