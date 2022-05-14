import {
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_ALL_POSTS,
} from "../constant/actionTypes";

const intialState = [];
const postReducers = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return state;
    case GET_ALL_POSTS:
      return state;
    case DELETE_POST:
      return state;
    case UPDATE_POST:
      return state;
    default:
      return state;
  }
};

export default postReducers;
