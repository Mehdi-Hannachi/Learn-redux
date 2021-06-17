import { INCREMENT } from "../ActionsTypes/actionsTypes";

const initialState = {
  count: 0,
  name: "Sahar",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: ++state.count,
      };

    default:
      return state;
  }
};

export default counterReducer;
