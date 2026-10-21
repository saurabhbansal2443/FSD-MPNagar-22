import React, { useState, useEffect } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const changeInput = (event) => {
    setQuery(event.target.value);
  };
  useEffect(function () {
    console.log("Callback called for useEffect");
  });
  // Useffect is a hook to handle all the sideeffect for example 
  // (Api call , setTimers or applying event directly to dom )
  // UseEffect will run after the return is done 
  // dependency array -- 1) [] -- it will run only one time on initial mount
  // 2)[query] -- when the dependcy will change the useEffect will run
  // 3) empty - (Donot pass the second parameter in useEffect) - it will always rerun when the compenent re renders

  console.log("App component");
  return (
    <div style={style?.root}>
      {console.log("Return run")}
      <input
        value={query}
        onChange={changeInput}
        style={style?.input}
        type="text"
      />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus
      </button>

      <div style={style?.suggestion}>
        <p>
          {query} {count}
        </p>
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
