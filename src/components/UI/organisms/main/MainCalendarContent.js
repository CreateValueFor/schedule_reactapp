function CalendarMain() {
  const { viewDate, selectDate, today } = useCalendarState();

  const startWeek = viewDate.startOf('month').week();
  const endWeek =
    viewDate.endOf('month').week() === 1 ? 53 : viewDate.endOf('month').week();
  let calender = [];
  const dispatch = useCalendarDispatch();
  for (let week = startWeek; week <= endWeek; week++) {
    calender.push(
      <div className="row" key={week}>
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
                <div className={`box`} key={`${week}_${i}`}>
                  <div
                    className={`text ${isSelected} ${isToday} ${isNone}`}
                    onClick={() => {
                      dispatch({
                        type: 'SELECT',
                        current: current,
                      });
                    }}
                  >
                    <span className={`day`}>{current.format('D')}</span>
                    {isToday ? (
                      <span className="isToday">오늘</span>
                    ) : isSelected ? (
                      <span className="isSelected"></span>
                    ) : null}
                  </div>
                </div>
              </>
            );
          })}
      </div>,
    );
  }
  return calender;
}
export default CalendarMain;
