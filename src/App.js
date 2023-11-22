import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  function buttonClick(e) {
    e.preventDefault();
    setTask("");
    setTodos((oldTodo) => [...oldTodo, task]);
  }

  return (
    <div>
      <header className="header"> Todo APP</header>
      <div className="content">
        Add Todo List Here....
        <p>
          <form onSubmit={buttonClick}>
            <input
              type="text"
              placeholder="Enter your todo list"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
            ></input>{" "}
            <button type="submit">Add Todo</button>
          </form>
        </p>
        <ul>
          {todos.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
