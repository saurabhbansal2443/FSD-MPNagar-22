import React from "react";

const App = () => {
  return (
    <div style={style.root}>
      <div style={style.optionsContainer}>
        <input type="text" />
        <button>Add</button>
      </div>
      <div style={style?.taskContainer}>
        <div style={style?.task}>
          <p>The task </p>
          <button>Delete</button>
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
  },
  optionsContainer: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  taskContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    width: "50%",
    height: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4D8DBA",
    margin: "10px",
    padding: "10px",
  },
};
