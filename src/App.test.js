import React from 'react';
import {shallow} from 'enzyme';
// import ReactDOM from 'react-dom';
import { App }  from './App';
import {initialState} from './actions/reducers'
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

it("renders without crashing", () => {
  const mockFunction = jest.fn();
 const component = shallow(<App state={initialState} submitTodo={mockFunction} todos={[]} />);
 expect(component.exists()).toEqual(true);
});
