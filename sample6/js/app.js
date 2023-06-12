import { data } from "../../module/data.js";

const get = target => {
  if (document.querySelector(target)) {
    return document.querySelector(target);
  } else {
    throw "ERROR - get";
  }
};
const getAll = target => {
  if (document.querySelectorAll(target)) {
    return document.querySelectorAll(target);
  } else {
    throw "ERROR - getAll";
  }
};
if (localStorage.getItem("no") === 7) {
  newData = JSON.stringify(data);
  localStorage.setItem("newData", newData);
}
// localStorage.clear();
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

let newData = JSON.parse(localStorage.getItem("newData")) || [];
let no = JSON.parse(localStorage.getItem("no")) || 7;
const peopleDle = (delBtn, id) => {
  delBtn.addEventListener("click", e => {
    newData = newData.filter(item => item.id !== id);
    localStorage.setItem("newData", JSON.stringify(newData));
    showList();
  });
};
const showList = () => {
  employeeList.innerHTML = "";
  newData.forEach((item, idx) => {
    const { id, imgurl, islike, name, job, tel } = item;
    let people = document.createElement("li"),
      emimg = document.createElement("img"),
      eminfo = document.createElement("span"),
      emname = document.createElement("strong"),
      emjob = document.createElement("strong"),
      emtel = document.createElement("strong"),
      favorites = document.createElement("span"),
      star = document.createElement("i"),
      delBtn = document.createElement("button");
    people.classList.add("people");
    eminfo.classList.add("info");
    emname.classList.add("name");
    emjob.classList.add("job");
    emtel.classList.add("tel");
    favorites.classList.add("favorites");
    if (newData[idx].islike) {
      star.className = "xi-star";
    } else {
      star.className = "xi-star-o";
    }
    delBtn.classList.add("delBtn");
    emimg.setAttribute("src", item.imgurl);
    emname.textContent = item.name;
    emjob.textContent = item.job;
    emtel.textContent = item.tel;
    delBtn.textContent = "퇴사";

    eminfo.append(emname, emjob, emtel);
    favorites.append(star);
    people.append(emimg, eminfo, favorites, delBtn);
    employeeList.append(people);

    favorites.addEventListener("click", e => {
      if (newData[idx].islike) {
        newData[idx].islike = false;
        star.classList.replace("xi-star", "xi-star-o");
      } else {
        newData[idx].islike = true;
        star.classList.replace("xi-star-o", "xi-star");
      }
      localStorage.setItem("newData", JSON.stringify(newData));
    });
    peopleDle(delBtn, id);
    localStorage.setItem("newData", JSON.stringify(newData));
  });
  addName.value = "";
  addJob.value = "";
  addPhoto.value = "";
  addTel.value = "";
  addName.focus();
};
showList();
const emAdd = () => {
  newData = [
    ...newData,
    {
      id: no++,
      imgurl: addPhoto.value,
      name: addName.value,
      job: addJob.value,
      tel: addTel.value,
      islike: false,
    },
  ];
  localStorage.setItem("no", JSON.stringify(no));
  localStorage.setItem("newData", JSON.stringify(newData));
};
addBtn.addEventListener("click", e => {
  if (addPhoto.value !== "" && addName.value !== "" && addJob.value !== "" && addTel.value !== "") {
    emAdd();
    showList();
    sucMsg.classList.add("on");
    sucMsg.classList.add("on");
    setTimeout(() => {
      sucMsg.classList.remove("on");
    }, 1500);
  } else {
    alert("입력하지 않은 정보가 있습니다.");
  }
});
showAddBoxBtn.addEventListener("click", e => {
  addBox.classList.add("on");
  forBg.classList.add("on");
});
addBoxClose.addEventListener("click", e => {
  addBox.classList.remove("on");
  forBg.classList.remove("on");
});
forBg.addEventListener("click", e => {
  e.currentTarget.classList.remove("on");
  addBox.classList.remove("on");
});
allDel.addEventListener("click", e => {
  employeeList.innerHTML = "";
});
allRe.addEventListener("click", e => {
  employeeList.innerHTML = "";
  showList();
});
