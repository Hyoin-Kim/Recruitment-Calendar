import React, { useState } from "react";
import Calendar from "../components/main/Calendar";
import Dates from "../components/main/Dates";

function getCurrDate() {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
}

const Main = () => {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);

  return (
    <div>
      <Calendar currYear={year} setCurrYear={setYear} currMonth={month} setCurrMonth={setMonth} />
      <Dates />
    </div>
  );
};

export default Main;
