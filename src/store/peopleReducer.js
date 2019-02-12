const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PEOPLE":
      return payload.results;
    default:
      return initialState;
  }
};
