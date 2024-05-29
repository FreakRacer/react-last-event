import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const deleted = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  const line = (id) => {
    dispatch({
      type: "LINE",
      payload: id,
    });
  };

  const [holder, setHolder] = useState("");

  const getValue = (e) => {
    setHolder(e.target.value);
  };

  const addTask = (e) => {
    setHolder("");
    e.preventDefault();
    let newItem = {
      text: holder,
      completed: false,
    };
    dispatch({
      type: "ADDTASK",
      payload: newItem,
    });
  };

  return (
    <>
      <header>
        <h1>list: {todos.length}</h1>
      </header>
      <main>
        <div className={todos.length > 0 ? "todos" : ""}>
          {todos.map((todo, id) => {
            return (
              <div className="todo" key={id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  onClick={() => line(id)}
                />
                <p className={todo.completed ? "strike" : ""}>{todo.text}</p>
                <button onClick={() => deleted(id)}>X</button>
              </div>
            );
          })}
        </div>
        <div className="input">
          <form>
            <input
              type="text"
              placeholder="add task..."
              value={holder}
              onChange={getValue}
            />
            {/* <button type="button" onClick={addTask}>add</button> */}
            <div className="btn" type="button" onClick={addTask}>
              add
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Todo;
