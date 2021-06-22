import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
  text-align: center;
  margin: 20px;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
  }
  .row.week {
    height: 18px;
    border-bottom: 1px solid #e8e8e8;
  }
  .box {
    width: 32px;
    height: 32px;
    margin: 6px 6px;
    font-size: 14px;
  }
  .text {
    position: static;
    width: 32px;
    height: 32px;
    color: #292929;
  }
  .holiday,
  .grayed {
    color: #484848;
    pointer-events: none;
  }
  .day {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
  .selected {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: pink;
    font-weight: 700;
    color: #fff;
  }
  .today {
    border-radius: 50%;
    font-weight: 500;
    /* color: pink; */
    background: pink;
  }
  .isSelected {
    position: relative;
    color: pink;
    font-size: 10px;
    font-weight: 400;
  }
  .isToday {
    position: relative;
    color: #292929;
    font-size: 10px;
    font-weight: 400;
  }
  .none {
    display: none;
  }
`;

function MainCalendarBody() {
  return (
    <StyledBody>
      <div className="row week">
        <div className="box">
          <span className="text">SUN</span>
        </div>
        <div className="box">
          <span className="text">MON</span>
        </div>
        <div className="box">
          <span className="text">TUE</span>
        </div>
        <div className="box">
          <span className="text">WED</span>
        </div>
        <div className="box">
          <span className="text">THU</span>
        </div>
        <div className="box">
          <span className="text">FRI</span>
        </div>
        <div className="box">
          <span className="text">SAT</span>
        </div>
      </div>
      <div>
        <CalendarMain></CalendarMain>
      </div>
    </StyledBody>
  );
}

export default MainCalendarBody;
