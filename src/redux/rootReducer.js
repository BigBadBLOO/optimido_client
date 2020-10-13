import {combineReducers} from 'redux'
import user from "./reducers/user";
import modal from "./reducers/modal";
import platform from "./reducers/platform";

export default combineReducers({
  user,
  modal,
  platform,
})