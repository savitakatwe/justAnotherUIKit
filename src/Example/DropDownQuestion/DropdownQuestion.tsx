"use client";

import { useState } from "react";

const countries = [
  { id: 1, name: "India", cities: [{ name: "Bombay" }, { name: "Delhi" }] },
  { id: 2, name: "UAE", cities: [{ name: "Dubai" }, { name: "AbuDabi" }] },
];

const DropdownQuestion = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <select
        onChange={(e) => {
          console.log(e.target.value as unknown as number);
          setIndex(e.target.value as unknown as number);
        }}
      >
        {countries.map((item, index) => (
          <option value={index}>{item.name}</option>
        ))}
      </select>
      <select>
        {countries[index].cities.map((item, index) => (
          <option>{item.name} </option>
        ))}
      </select>
    </>
  );
};
export default DropdownQuestion;
