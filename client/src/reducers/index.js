import postReducers from "./postReducers";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  posts: postReducers,
});

export default rootReducers;
