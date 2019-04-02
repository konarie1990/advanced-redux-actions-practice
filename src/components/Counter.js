import React from "react";

const Counter = props => {
  const num = props.count;
  return (
    <div>
      <div>Counter: {num}</div>
    </div>
  );
};
export default Counter;
