"use client";

import { useState } from "react";

const listData = [
  { title: "take bath" },
  { title: "learn React" },
  { title: "solve interview" },
];

const DeleteList = () => {
  const [list, setList] = useState(listData);

  const handleDelete = (i: number) => {
    const newList = list.filter((value, index) => index !== i);
    setList(newList);
  };

  return (
    <>
      <ul style={{ listStyle: "none", color: "white", display: "flex" }}>
        {list.map((item, index) => {
          return (
            <>
              <li value={index}>{item.title}</li>
              <button onClick={() => handleDelete(index)}>delete</button>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default DeleteList;
