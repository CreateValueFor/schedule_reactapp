import React, { createContext, useContext, useReducer } from 'react';
import styled from 'styled-components';

//day
const dayjs = require('dayjs');
const weekday = require('dayjs/plugin/weekday');
const isoWeek = require('dayjs/plugin/isoWeek');
const weekOfYear = require('dayjs/plugin/weekOfYear');
// day extend
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

const StyledCalendarPage = styled.div``;

let initialState = {
  viewDate: dayjs(),
  selectDate: dayjs(),
  today: dayjs(),
};

function Calendarreducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, viewDate: state.viewDate.add(1, 'month') };
    case 'SUBSTRACT':
      return { ...state, viewDate: state.viewDate.subtract(1, 'month') };
    case 'SELECT':
      return { ...state, selectDate: action.current };
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

function CalendarPage() {
  return <StyledCalendarPage></StyledCalendarPage>;
}

export default CalendarPage;
