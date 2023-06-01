# module이란?
  * 모듈이란 ***여러 기능들에 관한 코드가 모여있는 하나의 파일*** 로 다음과 같은 것들을 위해 사용한다.
  
    * 유지보수성 : 기능들이 모듈화가 잘 되어있다면, 의존성을 그만큼 줄일 수 있기 때문에 어떤 기능을 개선한다거나 수정할 때 훨씬 편하게 할 수 있다.
    * 네임스페이스화 : 자바스크립트에서 전역변수는 전역공간을 가지기 때문에 코드의 양이 많아질수록 겹치는 네임스페이스가 많아질 수 있다. 그러나 모듈로 분리하면 모듈만의 네임스페이스를 갖기 때문에 그 문제가 해결된다.
    * 재사용성 : 똑같은 코드를 반복하지 않고 모듈로 분리시켜서 필요할 때마다 사용할 수 있다.

# module 사용법
  * export (모듈 내보내기)
  * import (모듈 가져오기
    * 예제를 보며 이해하기
      ```js
      export function make1(msg){
      console.log(msg, 'make1');
      }
    * js 파일에서 내보내기를 할 ***함수, 클래스, 변수, js객체 등***에게 export를 붙여줍니다.
      ```js
        <script type="module">
        import {make1} from './module/test1.js';
        make1('test1');
      </script>
    * 그 다음, html파일 하단에 stript type="moudule"을 넣어준 후,
      import {***함수, 클래스, 변수, js객체 등***} from '가져올 것이 있는 js 파일 경로'를 실행해줍니다. 참고로, 중괄호의 존재 유무가 중요한데, 바로 밑에서 그 이유를 알 수 있다.
   * export default
        ```js
        exfault default make1(msg);
       
     이렇게 작성해준다. 단, js 파일 하나당 한개 밖에 쓰지 못한다.
   * export default를 가져오는 방법
       ```js
       <script type="module">
       import make1 from './module/test1.js';
       make1('test1);
       
      이렇게 default 값을 가져올 때는, 중괄호를 빼고 가져온다.

# module 예제

  * 구현하는 기능: 직원 리스트 출력



  * 직원 리스트에 즐겨찾기 기능 추가
  
  
  
  
  
  ## sample1 
  ```js
  <script>
      const allDelBtn = document.querySelector(".all-del");
      const allResetBtn = document.querySelector(".all-reset");
      const peopleList = document.querySelector(".people-list");
      let isfavorite = true;
      const peopleObj = [
        {
          id: 1,
          name: "아놀드",
          job: "웹퍼블리셔",
          tel: "010-2232-8832",
          imgurl: "images/image0.jpg",
          favorite: isfavorite,
        },
        {
          id: 2,
          name: "크리스 범스테드",
          job: "프론트엔드 개발자",
          tel: "010-2232-8832",
          imgurl: "images/image1.jpg",
          favorite: isfavorite,
        },
        {
          id: 3,
          name: "마샤딕",
          job: "백엔드 개발자",
          tel: "010-2232-8832",
          imgurl: "images/image2.jpg",
          favorite: isfavorite,
        },
        {
          id: 4,
          name: "다니엘 데이 루이스",
          job: "DB관리자",
          tel: "010-2232-8832",
          imgurl: "images/image3.jpg",
          favorite: isfavorite,
        },
        {
          id: 5,
          name: "하비에르 바르뎀",
          job: "보안 개발자",
          tel: "010-2232-8832",
          imgurl: "images/image4.jpg",
          favorite: isfavorite,
        },
        {
          id: 6,
          name: "아놀드",
          job: "웹퍼블리셔",
          tel: "010-2232-8832",
          imgurl: "images/image5.jpg",
          favorite: isfavorite,
        },
      ];

      const makeList = () => {
        const newObj = peopleObj.map(people => {
          let { imgurl, name, job, tel, favorite } = people;
          if (people.favorite) {
            favorite = "xi-star";
          } else {
            favorite = "xi-star-o";
          }
          peopleList.innerHTML += `
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
        });
      };
      makeList();
      allDelBtn.addEventListener("click", () => {
        peopleList.innerHTML = "";
      });
      allResetBtn.addEventListener("click", () => {
        peopleList.innerHTML = "";
        makeList();
      });
    </script>
```


기능 구현에 필요한 js 코드 전체를 html 파일 하단에 script 영역에 작성하였다.
    
    
    
    
## sample2
```js
export let isfavorite = true;
const peopleObj = [
  { id: 1, name: "아놀드", job: "웹퍼블리셔", tel: "010-2232-8832", imgurl: "images/image0.jpg", favorite: isfavorite },
  {
    id: 2,
    name: "크리스 범스테드",
    job: "프론트엔드 개발자",
    tel: "010-2232-8832",
    imgurl: "images/image1.jpg",
    favorite: isfavorite,
  },
  {
    id: 3,
    name: "마샤딕",
    job: "백엔드 개발자",
    tel: "010-2232-8832",
    imgurl: "images/image2.jpg",
    favorite: isfavorite,
  },
  {
    id: 4,
    name: "다니엘 데이 루이스",
    job: "DB관리자",
    tel: "010-2232-8832",
    imgurl: "images/image3.jpg",
    favorite: isfavorite,
  },
  {
    id: 5,
    name: "하비에르 바르뎀",
    job: "보안 개발자",
    tel: "010-2232-8832",
    imgurl: "images/image4.jpg",
    favorite: isfavorite,
  },
  { id: 6, name: "아놀드", job: "웹퍼블리셔", tel: "010-2232-8832", imgurl: "images/image5.jpg", favorite: isfavorite },
];
export default peopleObj;
```

module 폴더를 따로 만들어서 그 안에 data.js라고 한 다음 그 안에 peopleObj 배열을 따로 빼주었다.
(참고로, default 값으로 내보냈다.)
그 후, html 파일 하단에서
```js
   <script type="module">
      import peopleObj from "./module/data.js";
```
peopleObj를 가져와서 실행하였다.

### sample3
```js
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
```

sample3에서는 아예 script에 있던 실행 함들을 가져와서 showObj.js에 넣어주었고
showObj.js 첫줄에 기존에 따로 빼두었던 peopleObj를 import로 가져와서 실행하는 모습이다.
그 후, 버튼 동작 기능에 필요한 코드들을  app.js를 만들어서 넣어 놓았다.

```js
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
```

역시나 app.js에서도 module 폴더에 있는 data.js와 showObj.js를 import로 가져오는 모습이다.
그 후, html 하단에서
```js
<script type="module" src="app.js"></script>
```
로 실행해주었다.

## sample4
sample4에서는 queryselector도 따로 뽑아 쓸 수 있게, get함수를 만들어 getEle.js에 따로 빼주었다.
```js
export default function (target) {
  const ele = document.querySelector(target);
  if (ele) {
    return ele;
  } else {
    throw Error("선택한 요소가 존재하지 않습니다.");
  }
}
```
혹시 값이 잘못 들어올 수도 있는 경우를 대비하여
throw Error를 강제 실행하도록 만들었다.
