import { combineReducers, createStore} from 'redux';
import todos from "./actions/reducers";

const reducers = combineReducers({
  todos: todos
});

export default createStore(reducers);
