export default class PeopleList {
  newData = JSON.parse(localStorage.getItem("newData")) || [];
  no = JSON.parse(localStorage.getItem("no")) || 7;
  constructor(
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
  ) {
    this.forBg = forBg;
    this.allDel = allDel;
    this.allRe = allRe;
    this.employeeList = employeeList;
    this.showAddBoxBtn = showAddBoxBtn;
    this.addBox = addBox;
    this.addBoxClose = addBoxClose;
    this.addName = addName;
    this.addJob = addJob;
    this.addTel = addTel;
    this.addPhoto = addPhoto;
    this.addBtn = addBtn;
    this.sucMsg = sucMsg;
  }
  init() {
    this.showList();
    this.addBtn.addEventListener("click", e => {
      if (
        this.addPhoto.value !== "" &&
        this.addName.value !== "" &&
        this.addJob.value !== "" &&
        this.addTel.value !== ""
      ) {
        this.listAdd();
        this.showList();
        this.sucMsg.classList.add("on");
        this.sucMsg.classList.add("on");
        setTimeout(() => {
          this.sucMsg.classList.remove("on");
        }, 1500);
      } else {
        alert("입력하지 않은 정보가 있습니다.");
      }
    });
    this.showAddBoxBtn.addEventListener("click", e => {
      this.addBox.classList.add("on");
      this.forBg.classList.add("on");
    });
    this.addBoxClose.addEventListener("click", e => {
      this.addBox.classList.remove("on");
      this.forBg.classList.remove("on");
    });
    this.forBg.addEventListener("click", e => {
      e.currentTarget.classList.remove("on");
      this.addBox.classList.remove("on");
    });
    this.allDel.addEventListener("click", e => {
      this.employeeList.innerHTML = "";
    });
    this.allRe.addEventListener("click", e => {
      this.employeeList.innerHTML = "";
      this.showList();
    });
  }
  showList() {
    this.employeeList.innerHTML = "";
    this.newData.forEach((item, idx) => {
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
      if (this.newData[idx].islike) {
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
      this.employeeList.append(people);

      favorites.addEventListener("click", e => {
        if (this.newData[idx].islike) {
          this.newData[idx].islike = false;
          star.classList.replace("xi-star", "xi-star-o");
        } else {
          this.newData[idx].islike = true;
          star.classList.replace("xi-star-o", "xi-star");
        }
        localStorage.setItem("newData", JSON.stringify(this.newData));
      });
      this.listDel(delBtn, id);
      localStorage.setItem("newData", JSON.stringify(this.newData));
    });
    this.addName.value = "";
    this.addJob.value = "";
    this.addPhoto.value = "";
    this.addTel.value = "";
    this.addName.focus();
  }
  listDel(delBtn, id) {
    delBtn.addEventListener("click", e => {
      this.newData = this.newData.filter(item => item.id !== id);
      localStorage.setItem("newData", JSON.stringify(this.newData));
      this.showList();
    });
  }
  listAdd() {
    this.newData = [
      ...this.newData,
      {
        id: this.no++,
        imgurl: this.addPhoto.value,
        name: this.addName.value,
        job: this.addJob.value,
        tel: this.addTel.value,
        islike: false,
      },
    ];
    localStorage.setItem("no", JSON.stringify(this.no));
    localStorage.setItem("newData", JSON.stringify(this.newData));
  }
  copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }
}
