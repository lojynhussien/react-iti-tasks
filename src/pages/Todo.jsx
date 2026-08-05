import { useState } from "react";
import Navbar from "../components/Navbar";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTask() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    if (editIndex === index) {
      setTask("");
      setEditIndex(null);
    }
  }

  function editTask(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  return (
    <>
      <Navbar username="Lojyn" cartCount={0} />

      <div className="todo-container">

        <h1>Todo List</h1>

        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>

        <ul>

          {tasks.map((item, index) => (

            <li key={index}>

              <span>{item}</span>

              <div>

                <button onClick={() => editTask(index)}>
                  Edit
                </button>

                <button onClick={() => deleteTask(index)}>
                  Delete
                </button>

              </div>

            </li>

          ))}

        </ul>

      </div>
    </>
  );
}

export default Todo;