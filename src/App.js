import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import store from './store'
import AddTodo from './components/addTodo/index';
import actions from './actions/actions';
import TodoList from './components/todolist/index'


export const App = ({submitTodo, todos}) => (
  <div>
    <h1> CC Todo</h1>
    <AddTodo submitTodo={submitTodo}/>
    <TodoList todos={todos} />
  </div>
);
App.PropsTypes = {
  submitTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => state.todos;

const mapDispatchToProps = dispatch => ({
  submitTodo: text => {
    if(text) {
      dispatch(actions.submitTodo(text));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
