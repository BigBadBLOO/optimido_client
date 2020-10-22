import {InitStaticData, SetModule} from "../actions/actionsType";

const initialState = {
  modules: {},
  tariff: {},
}

export default function staticData(state = initialState, action) {
  switch (action.type) {
    case InitStaticData:
      return {...state, ...action.elem};
    case SetModule:
      return {...state, modules: {
        ...state.modules,
        ...action.elem
      }};
    default:
      return state
  }
}