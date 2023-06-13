import React, { useRef, useState } from "react";
import Gallery from "./Gallery";
import { AiOutlineCloseCircle } from "react-icons/ai";
const ShowAddBox = ({ toggleAddBox, onAdd, classOn }) => {
  const [sucSub, setSucSub] = useState(false);
  const [employee, setEmployee] = useState({
    name: "",
    job: "",
    tel: "",
    imgurl: "",
    islike: false,
  });
  const employeeRef = useRef(null);
  const { name, job, tel, imgurl, islike } = employee;
  const changeInput = e => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!name || !job || !tel || !imgurl) return alert("값을 입력하세요");
    onAdd(employee);
    setEmployee({
      name: "",
      job: "",
      tel: "",
      imgurl: "",
    });
    setSucSub(true);
    setTimeout(() => {
      setSucSub(false);
    }, 1500);
    employeeRef.current.focus();
  };
  return (
    <div className={classOn ? "show-add-box on" : "show-add-box"}>
      <div className="employee-add-box">
        <h2>명단 추가</h2>
        <form action="get" onSubmit={onSubmit}>
          <table>
            <colgroup>
              <col className="w1" />
              <col className="w2" />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="name">이름</label>
                </th>
                <td>
                  <input
                    type="text"
                    htmlFor="name"
                    placeholder="이름을 입력하세요"
                    className="w350"
                    id="name"
                    name="name"
                    value={name}
                    onChange={changeInput}
                    ref={employeeRef}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="job">직업</label>
                </th>
                <td>
                  <input
                    type="text"
                    htmlForm="job"
                    placeholder="직업을 입력하세요"
                    className="w350"
                    id="job"
                    name="job"
                    value={job}
                    onChange={changeInput}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="tel">연락처</label>
                </th>
                <td>
                  <input
                    type="text"
                    htmlFor="tel"
                    placeholder="연락처를 입력하세요"
                    className="w350"
                    id="tel"
                    name="tel"
                    value={tel}
                    onChange={changeInput}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="photo">사진</label>
                </th>
                <td>
                  <input
                    type="text"
                    htmlFor="photo"
                    placeholder="사진 주소를 입력하세요"
                    className="w350"
                    id="photo"
                    name="imgurl"
                    value={imgurl}
                    onChange={changeInput}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <p className="add">
          <button className="addBtn" type="submit" onClick={onSubmit}>
            추가
          </button>
        </p>
        <p>클릭 시 주소가 복사됩니다.</p>
        <Gallery />
        <span className={sucSub ? "suc-msg on" : "suc-msg"}>명단이 추가되었습니다.</span>
      </div>
      <button className="add-box-close" onClick={toggleAddBox}>
        <i>
          <AiOutlineCloseCircle />
        </i>
      </button>
    </div>
  );
};

export default ShowAddBox;
