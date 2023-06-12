import { data } from "../module2/data.js";
import { get, getAll } from "../module2/getEle.js";
import PeopleList from "../module2/peopleList.js";

let no = JSON.parse(localStorage.getItem("no")) || 6;
if (no === 6) {
  no = 7;
  let newData = JSON.stringify(data);
  localStorage.setItem("newData", newData);
  localStorage.setItem("no", JSON.stringify(no));
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
