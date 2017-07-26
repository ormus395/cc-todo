import {reducer, initialState} from "./reducers";
import types from "./types";
describe("All the Reducers", () => {
  it('Should return initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("Submit todo, finally", () => {
    it('should return the correct statement-o', () => {
      const todoText = "Hes is a todoies";
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText
      };
      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ]
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

  });
});
