import * as utils from "../lib/utils.js";

export const get = url => dispatch => {
  return utils.fetchData(url).then(data => {
    dispatch(dispatchedGet(data));
  });
};

const dispatchedGet = payload => {
  console.log("get_people action dispatched with", payload);
  return {
    type: "GET_PEOPLE",
    payload: payload
  };
};
