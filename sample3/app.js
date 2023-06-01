import { peopleObj, isfavorite } from "./module/data.js";
import { makeList, favoriteChange } from "./module/showObj.js";

const allDelBtn = document.querySelector(".all-del");
const allResetBtn = document.querySelector(".all-reset");
const peopleList = document.querySelector(".people-list");

peopleList.innerHTML = makeList(peopleObj);
favoriteChange();
allDelBtn.addEventListener("click", () => {
  peopleList.innerHTML = "";
});
allResetBtn.addEventListener("click", () => {
  peopleList.innerHTML = "";
  peopleList.innerHTML = makeList(peopleObj);
  favoriteChange();
});
