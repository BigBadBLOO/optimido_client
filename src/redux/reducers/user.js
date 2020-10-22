import {CancelConfirmEmail, InitUser, LoginUser} from "../actions/actionsType";

const initialState = {
  name: '',
  email: '',
  isAuth: false,
  isInitial: false,
  twoAuth: false,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case CancelConfirmEmail:
      return {
        ...state,
        emailIsConfirm: true,
      }
    case InitUser:
      return {
        ...state,
        ...action.user,
        isInitial: true,
        isAuth: !!action.user.email,
      }
    case LoginUser:
      return {
        ...state,
        ...action.user,
        isAuth: !!action.user.email,
      }
    default:
      return state
  }
}