import * as utils from "../lib/utils.js";

export const getPersonDetails = url => dispatch => {
  return utils.fetchData(url).then(data => {
    dispatch(dispatchedGet(data));
  });
};

const dispatchedGet = payload => {
  console.log("get_person action dispatched with", payload);
  return {
    type: "GET_PERSON",
    payload: payload
  };
};
