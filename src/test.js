// import React from "react";

// const initialState = {
//   todoList: []
// };

// const actions = {
//   ADD_TODO_ITEM: "ADD_TODO_ITEM",
//   REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
//   TOGGLE_COMPLETED: "TOGGLE_COMPLETED"
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case actions.ADD_TODO_ITEM:
//       return {
//         todoList: [
//           ...state.todoList,
//           {
//             id: new Date().valueOf(),
//             label: action.todoItemLabel,
//             completed: false
//           }
//         ]
//       };
//     case actions.REMOVE_TODO_ITEM: {
//       const filteredTodoItem = state.todoList.filter(
//         (todoItem) => todoItem.id !== action.todoItemId
//       );
//       return { todoList: filteredTodoItem };
//     }
//     case actions.TOGGLE_COMPLETED: {
//       const updatedTodoList = state.todoList.map((todoItem) =>
//         todoItem.id === action.todoItemId
//           ? { ...todoItem, completed: !todoItem.completed }
//           : todoItem
//       );
//       return { todoList: updatedTodoList };
//     }
//     default:
//       return state;
//   }
// };

// const TodoListContext = React.createContext();

// const Provider = ({ children }) => {
//   const [state, dispatch] = React.useReducer(reducer, initialState);

//   const value = {
//     todoList: state.todoList,
//     addTodoItem: (todoItemLabel) => {
//       dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
//     },
//     removeTodoItem: (todoItemId) => {
//       dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
//     },
//     markAsCompleted: (todoItemId) => {
//       dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
//     }
//   };

//   return (
//     <TodoListContext.Provider value={value}>
//       {children}
//     </TodoListContext.Provider>
//   );
// };
