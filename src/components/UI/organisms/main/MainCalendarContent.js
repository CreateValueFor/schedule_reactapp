import { useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../../../../firebase';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../../pages/CalendarPage';
import { StyledFlexBox } from '../../atoms/box';
import { DefaultRectangleButton } from '../../atoms/button';
import { PostLabelStyle } from '../../atoms/text';

const StyledMainCalendarContent = styled(StyledFlexBox)`
  width: 140px;
  height: 64px;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  & > div {
    width: 100%;
    height: 100%;
  }
  .selected {
    background: rgba(0, 189, 184, 0.5);
    font-weight: 700;
    color: #fff;
  }
  .today {
    position: relative;

    font-weight: 500;
    background: #ffff83;
  }
  .none {
    display: none;
  }
`;

const CalendarRow = styled(StyledFlexBox)`
  width: 100%;
`;

const DayButton = styled(DefaultRectangleButton)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const DayText = styled(PostLabelStyle)`
  font-size: 14px;
`;

function MainCalendarContent() {
  const { viewDate, selectDate, today } = useCalendarState();
  const dispatch = useCalendarDispatch();
  const [selectDaily, setSelectDaily] = useState([]);

  const startWeek = viewDate.startOf('month').week();
  const endWeek =
    viewDate.endOf('month').week() === 1 ? 53 : viewDate.endOf('month').week();
  const fetchDaily = async (current) => {
    console.log(current);
    await dbService
      .collection('daily')
      .doc(`${current.format('YYYY. M. D.')}`)
      .onSnapshot((docs) => {
        try {
          // console.log(docs.data().todos);
          setSelectDaily(docs.data().todos);
          dispatch({
            type: 'OPEN_MODAL',
            selectDateTodos: selectDaily,
            selectDate,
          });
        } catch (error) {
          window.alert(error);
        }
      });
  };
  let calender = [];
  for (let week = startWeek; week <= endWeek; week++) {
    calender.push(
      <CalendarRow dir={'row'} key={week}>
        {Array(7)
          .fill(0)
          .map((n, i) => {
            let current = viewDate
              .startOf('week')
              .week(week)
              .add(n + i, 'day');
            if (viewDate.format('MM') === '12') {
              current = viewDate
                .startOf('week')
                .week(week - 52)
                .add(n + i, 'day');
            }
            // 현재 날짜 (기준)
            let isSelected =
              selectDate.format('YYYYMMDD') === current.format('YYYYMMDD')
                ? 'selected'
                : '';
            let isToday =
              today.format('YYYYMMDD') === current.format('YYYYMMDD')
                ? 'today'
                : '';
            let isNone =
              current.format('MM') === viewDate.format('MM') ? '' : 'none';
            return (
              <>
                <StyledMainCalendarContent key={`${week}_${i}`}>
                  <DayButton
                    key={`${week}_${i}`}
                    className={`${isSelected} ${isToday} ${isNone}`}
                    onClick={() => {
                      dispatch({
                        type: 'SELECT_DATE',
                        current,
                      });

                      const dailyArray = fetchDaily(selectDate);
                    }}
                  >
                    <DayText>{current.format('D')}</DayText>
                    {/* 할 일 목록 리스트 나열하기 */}
                  </DayButton>
                </StyledMainCalendarContent>
              </>
            );
          })}
      </CalendarRow>,
    );
  }
  return calender;
}
export default MainCalendarContent;
