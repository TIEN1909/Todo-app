const initState = [
  { id: 1, courseName: 'Learn React', completed: false, priority: 'High' },
  {
    id: 2,
    courseName: 'Learn JavaScript',
    completed: true,
    priority: 'Medium',
  },
  { id: 3, courseName: 'Learn Redux', completed: false, priority: 'Low' },
];
const reducerTodoList = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];

    case 'todoList/toggleTodoStatus':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
export default reducerTodoList;
