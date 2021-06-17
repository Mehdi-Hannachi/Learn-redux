import { ADDITION } from "../ActionsTypes/actionsTypes";

const initialState = {
  sum: 0,
};

const additionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDITION:
      return {
        ...state,
        sum: payload.a + payload.b,
      };
    default:
      return state;
  }
};

export default additionReducer;
