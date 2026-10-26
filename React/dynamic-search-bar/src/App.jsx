import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  let timerId = useRef(null);
  function onInputChnage(event) {
    setQuery(event.target.value);
  }
  async function getData() {
    if (query.trim().length == 0) return;
    console.log("GetData called for query", query);
    let apiData = await fetch(getApi(query));
    let data = await apiData.json();
    setProducts(data.products);
  }
  useEffect(
    function () {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(getData, 300);
    },
    [query],
  );

  return (
    <div style={style?.root}>
      <input
        value={query}
        onChange={onInputChnage}
        style={style?.input}
        type="text"
      />

      {query.trim().length != 0 &&
        products.map(function (pObj) {
          return (
            <div key={pObj.id} style={style?.suggestion}>
              <p>{pObj.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;

function getApi(product) {
  return `https://dummyjson.com/products/search?q=${product}`;
}

// Useffect is a hook to handle all the sideeffect for example
// (Api call , setTimers or applying event directly to dom )
// UseEffect will run after the return is done
// dependency array -- 1) [] -- it will run only one time on initial mount
// 2)[query] -- when the dependcy will change the useEffect will run
// 3) empty - (Donot pass the second parameter in useEffect) -
//  it will always rerun when the compenent re renders

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
    minHeight: "5%",
    width: "25%",
    margin: "1%",
    backgroundColor: "#FFE8C4",
    fontSize: "1.5rem",
    outline: "none",
    borderRadius: "10px",
    padding: "5px",
  },
};
