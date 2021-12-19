import React from "react";
import styled from "styled-components";
import { LeftOff, RightOff } from "../../assets/index";

const Calendar = ({ currYear, setCurrYear, currMonth, setCurrMonth }) => {
  const DAY = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  function onClickLeft() {
    if (currMonth <= 1) {
      setCurrYear(currYear - 1);
      setCurrMonth(12);
    } else {
      setCurrMonth(currMonth - 1);
    }
  }
  function onClickRight() {
    if (currMonth > 11) {
      setCurrYear(currYear + 1);
      setCurrMonth(1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  }
  return (
    <StyledRoot>
      <div className="calendar">
        <img className="calendar__left" src={LeftOff} alt="" onClick={onClickLeft} />
        <div className="calendar__year">{currYear}.</div>
        <div className="calendar__month">{currMonth}</div>
        <img className="calendar__right" src={RightOff} alt="" onClick={onClickRight} />
      </div>
      <Days>
        {DAY.map((elm, idx) => {
          return <Day key={idx}>{elm}</Day>;
        })}
      </Days>
    </StyledRoot>
  );
};

export default Calendar;

const StyledRoot = styled.div`
  margin-top: 2vh;
  .calendar {
    display: flex;
    justify-content: center;

    &__left,
    &__right {
      display: flex;
      cursor: pointer;
    }
    &__year,
    &__month {
      display: flex;
      color: #ff6813;
      font-size: 30px;
      font-weight: bold;
      margin: 0 0 5px;
    }
  }
`;
const Days = styled.div`
  display: flex;
  margin-top: 1.5vw;
  margin-bottom: 0.5vw;
`;

const Day = styled.div`
  padding-right: 1.5vw;
  width: calc(100% / 7);
  text-align: center;
  background-color: #bbb;
  color: white;
`;
