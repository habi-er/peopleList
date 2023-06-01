import { peopleObj, isfavorite } from "./module/data.js";
import { makeList, favoriteChange } from "./module/showObj.js";
import get from "./module/getEle.js";

const allDelBtn = get(".all-del");
const allResetBtn = get(".all-reset");
const peopleList = get(".people-list");

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
