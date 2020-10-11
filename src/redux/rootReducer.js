import {combineReducers} from 'redux'
import user from "./reducers/user";
import urls from "./reducers/urls";
import modal from "./reducers/modal";
import platform from "./reducers/platform";

export default combineReducers({
  urls,
  user,
  modal,
  platform,
})