import { data } from "../../module/data.js";
import { get, getAll } from "../../module/getEle.js";
import PeopleList from "../../module/peopleList.js";

// localStorage.clear();
if (localStorage.getItem("no") === 7) {
  let newData = JSON.stringify(data);
  localStorage.setItem("newData", newData);
}

const forBg = get(".for-bg"),
  allDel = get(".btn .all-del"),
  allRe = get(".btn .all-reset"),
  employeeList = get(".employee-list"),
  showAddBoxBtn = get(".add-box-button"),
  addBox = get(".show-add-box"),
  addBoxClose = get(".add-box-close"),
  addName = get("#name"),
  addJob = get("#job"),
  addTel = get("#tel"),
  addPhoto = get("#photo"),
  addBtn = get(".addBtn"),
  sucMsg = get(".suc-msg");

const peopleList = new PeopleList(
  forBg,
  allDel,
  allRe,
  employeeList,
  showAddBoxBtn,
  addBox,
  addBoxClose,
  addName,
  addJob,
  addTel,
  addPhoto,
  addBtn,
  sucMsg
);
peopleList.init();
