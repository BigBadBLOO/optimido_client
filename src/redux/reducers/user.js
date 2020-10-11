import {CancelConfirmEmail, InitUser, LoginUser} from "../actions/actionsType";

const initialState = {
  name: '',
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
        isInitial: true,
        isAuth: !!action.user.email,
        name: action.user.name,
        token: action.user.token,
        email: action.user.email,
        emailIsConfirm: action.user.emailIsConfirm,
        balance: action.user.balance,
        bonusBalance: action.user.bonusBalance,
        twoAuth: action.user.twoAuth
      }
    case LoginUser:
      return {
         ...state,
        name: action.user.name,
        email: action.user.email,
        emailIsConfirm: action.user.emailIsConfirm,
        token: action.user.token,
        balance: action.user.balance,
        bonusBalance: action.user.bonusBalance,
        isAuth: !!action.user.email,
      }
    default:
      return state
  }
}