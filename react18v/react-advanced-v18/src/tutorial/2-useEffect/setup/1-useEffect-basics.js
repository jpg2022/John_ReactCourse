import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  //use effect is called at startup

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("use effects");
    if (value > 1) {
      document.title = `New messages(${value})`;
    }
  }, [value]); //only runs when these dependencies change

  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
