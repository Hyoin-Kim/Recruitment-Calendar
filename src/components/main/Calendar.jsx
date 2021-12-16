import React from "react";
import styled from "styled-components";
import { LeftOff, LeftOn, RightOn, RightOff } from "../../assets/index";

const Calendar = ({ currYear, setCurrYear, currMonth, setCurrMonth }) => {
  function onClickLeft() {
    if (currMonth < 1) {
      setCurrYear(currYear - 1);
      setCurrMonth(11);
    } else {
      setCurrMonth(currMonth - 1);
    }
  }
  function onClickRight() {
    if (currMonth > 10) {
      setCurrYear(currYear + 1);
      setCurrMonth(0);
    } else {
      setCurrMonth(currMonth + 1);
    }
  }
  return (
    <StyledRoot>
      <div className="calendar">
        <img className="calendar__left" src={LeftOff} alt="" onClick={onClickLeft} />
        <div className="calendar__year">{currYear}년</div>
        <div className="calendar__month">{currMonth + 1}월</div>
        <img className="calendar__right" src={RightOff} alt="" onClick={onClickRight} />
      </div>
    </StyledRoot>
  );
};

export default Calendar;

const StyledRoot = styled.div`
  margin-top: 20px;
  .calendar {
    display: flex;
    justify-content: center;

    &__left,
    &__right {
      display: flex;
      cursor: pointer;
    }
    &__left:hover {
      background-image: url(${LeftOn});
    }
    &__right:hover {
      background-image: url(${RightOn});
    }
    &__year,
    &__month {
      display: flex;
      color: #ff6813;
      font-size: 20px;
      font-weight: bold;
      margin: 0 8px 5px;
    }
  }
`;
