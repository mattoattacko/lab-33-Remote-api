const initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_PERSON":
      return payload;
    default:
      return state;
  }
};
