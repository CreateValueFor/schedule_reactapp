import React, { createContext, useContext, useReducer, useRef } from 'react';
import TodoTemplate from '../templates/TodoTemplate';

const initialState = {
  goals: '',
  todos: [
    {
      id: 1,
      todo: '8시 기상',
      done: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.todos.concat(action.todo);
    case 'TOGGLE':
      return state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.todos.filter((todo) => todo.id !== action.id);
    case 'CREATE_GOAL':
      return (state.goals = action.goals);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(2);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function TodoPage({ children }) {
  return (
    <TodoProvider>
      <TodoTemplate />
    </TodoProvider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
