import { peopleObj } from "./data.js";

const makeList = peopleObj => {
  let newObj = peopleObj
    .map(people => {
      let { imgurl, name, job, tel, favorite } = people;
      if (people.favorite) {
        favorite = "xi-star";
      } else {
        favorite = "xi-star-o";
      }
      return `
          <ul class="people">
              <li class="img"><img src="${imgurl}" alt=${name}></li>
              <li class="info">
                <p class="name">${name}</p>
                <p class="job">${job}</p>
                <p class="tel">${tel}</p>
              </li>
              <li class="Favorites"><i class=${favorite}></i></li>
            </ul>
          `;
    })
    .join("");
  return newObj;
};
const favoriteChange = () => {
  makeList(peopleObj);
  const Favorites = document.querySelectorAll(".Favorites i");
  Favorites.forEach(star => {
    star.addEventListener("click", e => {
      if (e.currentTarget.classList.contains("xi-star")) {
        e.currentTarget.classList.replace("xi-star", "xi-star-o");
      } else {
        e.currentTarget.classList.replace("xi-star-o", "xi-star");
      }
    });
  });
};

export { makeList, favoriteChange };
