import types from './types';

let todoId = 0;

const nextId = () => {
  return (todoId += 1);
};

const actions = {
  submitTodo(text) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text
    };
  }
};

export default actions;
