import React, { useState, useEffect } from "react";
import Calendar from "../components/main/Calendar";
import Body from "../components/main/Body";
import Modal from "../components/main/Modal";

const Main = () => {
  const now = new Date();
  const Year = now.getFullYear();
  const Month = now.getMonth() + 1;

  const [year, setYear] = useState(Year);
  const [month, setMonth] = useState(Month);
  const [totalDate, setTotalDate] = useState([]);

  const changeDate = (month) => {
    //이전 날짜
    let lastDate = new Date(year, month - 1, 0).getDate(); //이전 달의 마지막 날짜
    let lastDayWeek = new Date(year, month - 1, 0).getDay(); //요일[0:일,1:월,2:화,3:수,4:목,5:금,6:토]

    //현재 날짜
    const currentDate = new Date(year, month, 0).getDate(); //현재 달의 마지막 날짜
    const currentDayWeek = new Date(year, month, 0).getDay(); //요일[0:일,1:월,2:화,3:수,4:목,5:금,6:토]

    //이전 날짜 만들기
    let lastArray = [];
    if (lastDayWeek !== 6) {
      for (let i = 0; i < lastDayWeek + 1; i++) {
        lastArray.unshift(lastDate - i);
      }
    }
    //현재 날짜 만들기
    let nextArray = [];
    for (let i = 1; i < 7 - currentDayWeek; i++) {
      if (i === 0) {
        return nextArray;
      }
      nextArray.push(i);
    }

    //현재날짜
    let currentArray = [];

    currentArray = [...Array(currentDate + 1).keys()].slice(1);

    return lastArray.concat(currentArray, nextArray);
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  return (
    <div>
      <Calendar currYear={year} setCurrYear={setYear} currMonth={month} setCurrMonth={setMonth} />
      <Body totalDate={totalDate} month={month} year={year} />
      <Modal />
    </div>
  );
};

export default Main;
