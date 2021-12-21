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
      <CalendarWrapper>
        <img src={LeftOff} alt="" onClick={onClickLeft} />
        <div>{currYear}.</div>
        <div>{currMonth}</div>
        <img src={RightOff} alt="" onClick={onClickRight} />
      </CalendarWrapper>
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
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    display: flex;
    cursor: pointer;
    margin: 0px 10px 0px 10px;
  }
  & > div {
    display: flex;
    color: #ff6813;
    font-size: 30px;
    font-weight: bold;
    margin: 0 0 5px;
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
