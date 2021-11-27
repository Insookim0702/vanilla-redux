const reduxInfos = [
  `참고 강의 :
    <a
      href="https://nomadcoders.co/redux-for-beginners/lectures/1608"
      target="_blank"
      >nomad-coder-redux</a
    >`,
  `redux는 react뿐만 아니라, vanilla javascript, Vue, Node 백엔드 등에서도
    사용가능한 javascript 라이브러리이다.`,
  `redux는 함수이며, <strong>dispatch</strong>, <strong>subscribe</strong>,
    <strong>reducer</strong> 가 있다.`,
  `<strong>dispatch</strong>는 action객체를 매개변수로 가지며 reducer를
        호출한다.`,
  `<strong>subscribe</strong>는 store의 상태가 변경되면, 실행되는 함수이다.`,
  `<strong>reducer</strong>는 dispatch에 의해 호출되면 실행되는 함수이고,
  state와 action을 매개변수로 가진다. action은 객체이다.`,
  `redux principles : <a href="https://redux.js.org/understanding/thinking-in-redux/three-principles" target="_blank">https://redux.js.org/understanding/thinking-in-redux/three-principles</a>`,
];

const reduxThreePrinciplesInfos = [
  `<strong>Single source of truth</strong>: 앱의 전역 상태는 하나의 store에 객체 트리로 저장되는 방식이다.`,
  `<strong>State is read-only</strong>: 상태(state)를 변경하는 유일한 방법은 action을 emit하는 것이다. 중앙집권화(centralized)되고 순서에 따라서 한 개씩 변화가 일어나기 때문에 레이스 컨디션에 대한 걱정은 없다.`,
  `<strong>Changes are made with pure functions</strong>: actions의 요청으로 상태트리(state)를 변경시키려면 순수 함수 형태로 reducers를 작성해야 한다. <p style="background-color: #eee; margin: 0"><code lang="javascript" style="color: red">Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state.</code></p>`,
];

const reduxInfo = document.querySelector(".redux-info");
const reduxThreePrinciples = document.querySelector(".redux-three-principles");

reduxInfos.forEach((redux) => {
  const li = document.createElement("li");
  li.innerHTML = redux;
  reduxInfo.appendChild(li);
});

reduxThreePrinciplesInfos.forEach((redux) => {
  const li = document.createElement("li");
  li.innerHTML = redux;
  reduxThreePrinciples.appendChild(li);
});
