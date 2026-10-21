import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const changeInput = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div style={style?.root}>
      <input
        value={query}
        onChange={changeInput}
        style={style?.input}
        type="text"
      />

      <div style={style?.suggestion}>
        <p>{query} </p>
      </div>
    </div>
  );
};

export default App;

function getApi(product) {
  return `https://dummyjson.com/products/search?q=${product}`;
}

const style = {
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#FFF4DE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    height: "5%",
    width: "30%",
    margin: "5%",
    marginBottom: "1%",
    fontSize: "1.5rem",
    outline: "none",
    borderRadius: "10px",
    padding: "5px",
  },
  suggestion: {
    height: "5%",
    width: "25%",
    margin: "1%",
    backgroundColor: "#FFE8C4",
    fontSize: "1.5rem",
    outline: "none",
    borderRadius: "10px",
    padding: "5px",
  },
};
