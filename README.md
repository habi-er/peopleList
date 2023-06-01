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
  
