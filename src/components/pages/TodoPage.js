import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import { dbService } from '../../firebase';

let initialState = {
  goals: '치열하게 살기',
  todos: [
    {
      id: 1,
      todo: '8시 기상',
      label: '아침 습관 들이기',
      done: false,
      grade: '',
    },
    {
      id: 2,
      todo: '9시 기상',
      label: '아침 습관 들이기',
      done: false,
      grade: '',
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE':
      return { ...state, todos: action.todos };
    case 'CREATE':
      return { ...state, todos: state.todos.concat(action.todo) };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, done: !todo.done, grade: action.grade }
            : todo,
        ),
      };
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case 'CLEAR':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                done: false,
                grade: '',
              }
            : todo,
        ),
      };
    case 'CREATE_GOAL':
      return { ...state, goals: action.goals };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(3);
  // 데이터 탐색을 위한 Date객체
  const date = new Date();
  const getDaily = async () => {
    dbService
      .collection('daily')
      .doc(`${date.toLocaleDateString()}`)
      .onSnapshot((docs) => {
        const dailyArray = docs.data().todos;
        dispatch({
          type: 'INITIALIZE',
          todos: dailyArray,
        });
      });
  };

  useEffect(() => {
    getDaily();
  }, []);

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
