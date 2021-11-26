import { createStore } from "redux";
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("#number");
number.innerText = 0;
// store 상태 변경 함수
// reducer에서 리턴되는 건 application의 데이터가 된다.
const reducer = (value = 0, action) => {
  // action의 역할은 상태값 변경을 어떻게 할 건지 명령하게 된다. action = handle
  if (action.type === "add") {
    return value + 1;
  } else if (action.type === "minus") {
    return value - 1;
  } else {
    return value;
  }
};
const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};
const addAction = () => {
  store.dispatch({ type: "add" });
};

const minusAction = () => {
  store.dispatch({ type: "minus" });
};

// subscribe는 store 상태가 변경된 것을
store.subscribe(onChange);
add.addEventListener("click", addAction);
minus.addEventListener("click", minusAction);
