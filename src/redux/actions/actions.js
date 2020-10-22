import {
  InitUser,
  ShowModal,
  SetModalHeader,
  SetModalBody,
  LoginUser,
  CancelConfirmEmail, SetPlatform, InitStaticData, SetModule
} from "./actionsType";

export function cancelConfirmEmail() {
  return {
    type: CancelConfirmEmail
  }
}

export function initUser(user) {
  return {
    type: InitUser,
    user
  }
}

export function loginUser(user) {
  return {
    type: LoginUser,
    user
  }
}

export function showModal() {
  return {
    type: ShowModal
  }
}

export function setModalHeader(elem) {
  return {
    type: SetModalHeader,
    elem
  }
}

export function setModalBody(elem) {
  return {
    type: SetModalBody,
    elem
  }
}

export function setPlatform(elem) {
  return {
    type: SetPlatform,
    elem
  }
}

export function initStaticData(elem) {
  return {
    type: InitStaticData,
    elem
  }
}

export function setModule(elem) {
  return {
    type: SetModule,
    elem
  }
}