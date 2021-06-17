import React from "react";
import { useSelector, useDispatch } from "react-redux";
import counterReducer from "../../JS/Reducers/counterReducer";
import { increment } from "../../JS/Actions/actions";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);

  console.log(count);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button>-</button>
    </div>
  );
};

export default Counter;
