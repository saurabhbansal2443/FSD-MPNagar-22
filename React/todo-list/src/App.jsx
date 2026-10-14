
import React from "react";

const App = () => {
  return (
    <div style={style.root}>
      <div style={style.optionsContainer}>
        <input
          type="text"
          placeholder="Enter your task..."
          style={style.input}
        />
        <button style={style.addButton}>Add</button>
      </div>

      <div style={style.taskContainer}>
        <div style={style.task}>
          <p>The task</p>
          <button style={style.deleteButton}>Delete</button>
        </div>
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
