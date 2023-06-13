import React from "react";
import EmployeeItem from "./EmployeeItem";
const EmployeeList = ({ data, onDel, isChk, onLike }) => {
  return (
    <ul className="employee-list">
      {data.map(item => (
        <EmployeeItem key={item.id} item={item} onDel={onDel} isChk={isChk} onLike={onLike} />
      ))}
    </ul>
  );
};

export default EmployeeList;
