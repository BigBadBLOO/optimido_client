import {ShowModal, SetModalHeader, SetModalBody, SetModalFooter} from "../actions/actionsType";

const initialState = {
  show: false,
  header: null,
  body: null,
  footer: null
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case ShowModal:
      return { ...state, show: !state.show };
    case SetModalHeader:
      return { ...state, header: action.elem };
    case SetModalBody:
      return { ...state, body: action.elem };
    case SetModalFooter:
      return { ...state, footer: action.elem };
    default:
      return state
  }
}