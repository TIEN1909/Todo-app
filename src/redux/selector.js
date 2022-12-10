import { createSelector } from 'reselect';
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const prioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;
// export const todoListSelector = (state) =>{
//     const todosRemaining = state.todoList.filter((todo)=>{
//         return todo.courseName.includes(state.filters.search)
//     })
//     return todosRemaining
// }
export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  prioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.courseName.includes(searchText) &&
              priorities.includes(todo.priority)
          : todo.courseName.includes(searchText);
      }

      return (
        todo.courseName.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
