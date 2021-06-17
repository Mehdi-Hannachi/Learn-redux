import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtion } from "../../JS/Actions/additionActions";

const Addition = () => {
  const sum = useSelector((state) => state.additionReducer.sum);

  console.log(sum);

  const dispatch = useDispatch();

  const [x, setX] = useState();
  const [y, setY] = useState();
  return (
    <div>
      <input type="text" onChange={(e) => setX(e.target.value)} />
      <input type="text" onChange={(e) => setY(e.target.value)} />

      <button onClick={() => dispatch(addtion({ a: x, b: y }))}>
        Addition
      </button>

      <span>{sum}</span>
    </div>
  );
};

export default Addition;
