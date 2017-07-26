import types from './types';
import actions from "./actions";

describe('Actions', () => {
  const todoText = 'A todo goes here, do it!';

  it("Should create an action to add a todo", () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText
    };
    expect(actions.submitTodo(todoText)).toEqual(expectedAction);
  });
});
