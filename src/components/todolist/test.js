import React from 'react'
import {shallow} from 'enzyme';

import TodoList from '.';

describe('TodoList component show me stuff', () => {
  const todos = [
    {
      id: 101,
      text: 'Banana pants pick up'
    }
  ];



  const component = shallow(<TodoList todos={todos} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display a todo when passed and jarec will be happy', () => {
    expect(component.find('.todo-text').text()).toEqual(todos[0].text);
  });
});
