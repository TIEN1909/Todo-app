import { combineReducers } from 'redux';
import reducerFilter from '../components/Filters/FilterSlice';
import reducerTodoList from '../components/TodoList/TodoListSlice';
// const rootReducer = (state = {}, action) => {
//   console.log({ state, action });
//   return {
//     todoList: reducerTodoList(state.todoList, action),
//     filters: reducerFilter(state.filters, action),
//   };
// };
const rootReducer = combineReducers({
  filters: reducerFilter,
  todoList: reducerTodoList,
});
export default rootReducer;
