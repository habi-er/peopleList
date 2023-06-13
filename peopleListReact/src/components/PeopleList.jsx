import React, { useRef, useState } from "react";
import { dataList } from "../assets/api/peopleListData.js";
import { AiOutlineSwapRight } from "react-icons/ai";
import EmployeeList from "./EmployeeList.jsx";
import ShowAddBox from "./ShowAddBox.jsx";
import "./sass/peopleList.scss";
const PeopleList = () => {
  const [data, setData] = useState(dataList);
  const no = useRef(data.length + 1);
  const [isChk, setIsChk] = useState(false);
  const [classOn, setClassOn] = useState(false);
  const toggleAddBox = () => {
    setClassOn(!classOn);
  };
  const allDel = () => {
    setData([]);
  };
  const allReset = () => {
    setData(dataList);
  };
  const onDel = id => {
    setData(data.filter(item => item.id !== id));
  };
  const onAdd = employee => {
    employee.id = no.current++;
    setData([...data, employee]);
  };
  const onLike = id => {
    setData(data.map(item => (item.id === id ? { ...item, islike: !item.islike } : item)));
  };
  return (
    <div id="wrap">
      <div className={isChk ? "for-bg on" : "for-bg"} onClick={toggleAddBox}></div>
      <div className="employee-list-box">
        <p className="btn">
          <button className="all-del" onClick={allDel}>
            명단 삭제
          </button>
          <button className="all-reset" onClick={allReset}>
            명단 보기
          </button>
        </p>
        <EmployeeList data={data} onDel={onDel} onLike={onLike} />
      </div>
      <span className="add-box-button" onClick={toggleAddBox}>
        명단 추가 click me!{" "}
        <i>
          <AiOutlineSwapRight />
        </i>
      </span>
      <ShowAddBox toggleAddBox={toggleAddBox} onAdd={onAdd} classOn={classOn} />
    </div>
  );
};

export default PeopleList;
