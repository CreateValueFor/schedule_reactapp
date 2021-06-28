import React, { createContext, useContext, useReducer } from 'react';
import { dbService } from '../../firebase';

//day
const dayjs = require('dayjs');
const weekday = require('dayjs/plugin/weekday');
const isoWeek = require('dayjs/plugin/isoWeek');
const weekOfYear = require('dayjs/plugin/weekOfYear');
const relativeTime = require('dayjs/plugin/relativeTime');
// day extend
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);
dayjs.extend(relativeTime);

let initialState = {
  viewDate: dayjs(),
  selectDate: dayjs(),
  today: dayjs(),
  isModal: false,
  selectDateTodos: [
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

function Calendarreducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, viewDate: state.viewDate.add(1, 'month') };
    case 'SUBSTRACT':
      return { ...state, viewDate: state.viewDate.subtract(1, 'month') };
    case 'SELECT_DATE':
      return {
        ...state,
        selectDate: action.current,
      };
    case 'OPEN_MODAL':
      console.log(action.selectDate);
      console.log('hi');
      return {
        ...state,
        isModal: !state.isModal,
        selectDateTodos: action.selectDateTodos,
      };
    case 'CLOSE_MODAL':
      return { ...state, isModal: !state.isModal, selectDateTodos: [] };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const CalendarStateContext = createContext();
const CalendarDispatchContext = createContext();

export function CalendarProvider({ children }) {
  const [state, dispatch] = useReducer(Calendarreducer, initialState);
  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
}

export function useCalendarState() {
  const context = useContext(CalendarStateContext);
  if (!context) {
    throw new Error('Cannot find CalendarProvider');
  }
  return context;
}
export function useCalendarDispatch() {
  const context = useContext(CalendarDispatchContext);
  if (!context) {
    throw new Error('Cannot find CalendarProvider');
  }
  return context;
}
//이거 왜 default 안 하면 안되는 지 물어보기
export default CalendarProvider;
