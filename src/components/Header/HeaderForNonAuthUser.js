import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {loginUser, setModalBody, setModalHeader, showModal} from "../../redux/actions/actions";
import ModalHeader from "./utils/ModalHeader";
import ModalBodyForLogin from "./utils/ModalBodyForLogin";
import ModalBodyForSignUp from "./utils/ModalBodyForSignUp";
import Logo from "../Logo/Logo";

function HeaderForNonAuthUser({setModalHeader, setModalBody, showModal}) {

  const login = () => {
    setModalHeader(<ModalHeader/>)
    setModalBody(<ModalBodyForLogin/>)
    showModal()
  }
  const signUp = () => {
    setModalHeader(<ModalHeader/>)
    setModalBody(<ModalBodyForSignUp/>)
    showModal()
  }
  return (
    <div className="p-4 flex justify-between">
      <Logo/>
      <div className="hidden md:flex md:ml-32 items-center justify-center">
        <span className="px-2 cursor-pointer">Возможности</span>
        <span className="px-2 cursor-pointer">Тарифы</span>
        <span className=" px-2 cursor-pointer">Собрать платформу</span>
      </div>
      <div className="flex justify-end items-center">
        <span className="text-gold px-2 cursor-pointer" onClick={login}>Вход</span>
        <span className="text-gold px-2 cursor-pointer" onClick={signUp}>Регистрация</span>
      </div>
    </div>
  )
}

function mapStateToProps() {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: () => dispatch(showModal()),
    setModalHeader: (elem) => dispatch(setModalHeader(elem)),
    setModalBody: (elem) => dispatch(setModalBody(elem)),
    loginUser: (user) => dispatch(loginUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForNonAuthUser)

HeaderForNonAuthUser.propTypes = {
  showModal: PropTypes.func,
  setModalHeader: PropTypes.func,
  setModalBody: PropTypes.func,
};