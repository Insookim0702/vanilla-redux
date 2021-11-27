import { createStore } from "redux";
const input = document.querySelector(".input");
const ul = document.querySelector("ul");
const addTodoClass = document.querySelector(".addTodo");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return { type: ADD_TODO, text };
};

const dispatchAddTodo = (text) => {
  toDoStore.dispatch(addTodo(text));
};

addTodoClass.addEventListener("click", () => {
  if (input.value === "") {
    alert("할 일을 입력하세요.");
    return;
  }
  dispatchAddTodo(input.value);
  input.value = "";
});

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

const dispatchDeleteTodo = (idx) => {
  toDoStore.dispatch(deleteTodo(idx));
};

const paintTodo = () => {
  const todoListState = toDoStore.getState();
  ul.innerHTML = "";
  todoListState.forEach((toDo, idx) => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerHTML = `${toDo.text} <button class="deleteTodo${toDo.id}" id=${toDo.id}>❌</button>`;
    ul.appendChild(li);
    const deleteTodoClass = document.querySelector(`.deleteTodo${toDo.id}`);
    deleteTodoClass.addEventListener("click", (e) => {
      const node = e.target.parentNode;
      dispatchDeleteTodo(Number(node.id));
    });
  });
};

const createTodo = (toDoList) => {
  paintTodo(toDoList);
};

//reduce를 실행하는 함수는 순수함수(상태값을 mutate하지 않는 함수)여야 한다.
const reducerTodo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((item) => item.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const toDoStore = createStore(reducerTodo);

toDoStore.subscribe(() => {
  createTodo(toDoStore.getState());
});
