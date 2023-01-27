import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setisError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* {if()console.log('hello world')} */}
      <button className="btn" onClick={() => setisError(!isError)}>
        toggle error
      </button>

      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>There is no error!</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
