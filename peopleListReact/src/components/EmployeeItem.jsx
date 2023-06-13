import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const EmployeeItem = ({ item, onDel, onLike }) => {
  const { id, name, job, tel, imgurl, islike } = item;
  return (
    <li className="people">
      <img src={imgurl} alt={name} />
      <span className="info">
        <strong className="name">{name}</strong>
        <strong className="job">{job}</strong>
        <strong className="tel">{tel}</strong>
      </span>
      <span className="favorites" onClick={() => onLike(id)}>
        <i>{islike ? <AiFillStar /> : <AiOutlineStar />}</i>
      </span>
      <button className="delBtn" onClick={() => onDel(id)}>
        퇴사
      </button>
    </li>
  );
};

export default EmployeeItem;
