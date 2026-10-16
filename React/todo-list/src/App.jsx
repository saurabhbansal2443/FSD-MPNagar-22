import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const inputChange = (event) => {
    console.log(event);
    setTask(event.target.value);
  };
  const addTask = () => {
    if (task.trim().length == 0) {
      alert("task is empty");
      return;
    }
    let taskObj = { id: Date.now(), task: task.trim() };
    let newTasks = [...taskArray, taskObj];
    setTaskArray(newTasks);
    setTask("");
  };

  const keyDown = (event) => {
    if (event.key != "Enter") return;
    addTask();
  };

  const deleteTask = (id) => {
    let filteredTask = taskArray.filter((taskObj) => taskObj.id != id);
    setTaskArray(filteredTask);
  };
  return (
    <div style={style.root}>
      <div style={style.optionsContainer}>
        <input
          value={task}
          onChange={inputChange}
          onKeyDown={keyDown}
          type="text"
          placeholder="Enter your task..."
          style={style.input}
        />
        <button onClick={addTask} style={style.addButton}>
          Add
        </button>
      </div>
      <div style={style.taskContainer}>
        {taskArray.map((taskObj) => {
          return (
            <div key={taskObj.id} style={style.task}>
              <p>{taskObj.task}</p>
              <button
                onClick={() => {
                  deleteTask(taskObj.id);
                }}
                style={style.deleteButton}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

const style = {
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#97D7FF",
    padding: "40px 20px",
    boxSizing: "border-box",
  },

  optionsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginBottom: "30px",
  },

  input: {
    width: "40%",
    padding: "12px 16px",
    border: "2px solid #4D8DBA",
    borderRadius: "8px",
    outline: "none",
    fontSize: "16px",
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
  },

  addButton: {
    padding: "12px 24px",
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  taskContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },

  task: {
    width: "50%",
    minHeight: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4D8DBA",
    color: "#FFFFFF",
    margin: "0",
    padding: "12px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },

  deleteButton: {
    padding: "8px 14px",
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
  },
};
