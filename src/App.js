import { useState } from "react";
import "./App.css";

let listId = 0;
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function buttonClick(e) {
    e.preventDefault();
    setTask("");
    setTodos((oldTodo) => [...oldTodo, { todo: task, id: listId }]);
    listId++;
  }

  function deleteItem(id) {
    setTodos((oldTodos) => oldTodos.filter((i) => i.id !== id));
  }

  return (
    <div>
      <header className="header"> Todo APP</header>
      <div className="content">
        Add Todo List Here....
        <p>
          <form onSubmit={buttonClick}>
            <input
              // onKeyDown={(event) => {
              //   if (event["keyCode"] === 13) {
              //     buttonClick();
              //   }
              // }}
              type="text"
              placeholder="Enter your todo list"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
            ></input>{" "}
            <button type="submit" id="addBtn">
              Add Todo
            </button>
          </form>
        </p>
        <ul>
          {todos.map((i) => {
            return (
              <div className="list">
                <li>{i.todo}</li>
                <img
                  onClick={() => deleteItem(i.id)}
                  src="https://icons.veryicon.com/png/o/transport/shopping-mall/delete-127.png"
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
