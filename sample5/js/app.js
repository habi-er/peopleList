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
  let data = [
    { id: 1, imgurl: "../images/img1.jpg", name: "헐크", job: "웹퍼블리셔", tel: "010-1111-1111", islike: false },
    { id: 2, imgurl: "../images/img2.jpg", name: "아이언맨", job: "백엔드", tel: "010-2222-2222", islike: false },
    { id: 3, imgurl: "../images/img3.jpg", name: "캡틴아메리카", job: "백엔드", tel: "010-3333-3333", islike: false },
    { id: 4, imgurl: "../images/img4.jpg", name: "스파이더맨", job: "프론트엔드", tel: "010-4444-4444", islike: false },
    { id: 5, imgurl: "../images/img5.jpg", name: "토르", job: "DB관리자", tel: "010-5555-5555", islike: false },
    { id: 6, imgurl: "../images/img6.jpg", name: "로키", job: "보안", tel: "010-6666-6666", islike: false },
  ];
  let newData = JSON.stringify(data);
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
function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
}
