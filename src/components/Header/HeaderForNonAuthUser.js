import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {loginUser, setModalBody, setModalFooter, setModalHeader, showModal} from "../../redux/actions/actions";
import ModalBodyForLogin from "./utils/ModalBodyForLogin";
import ModalHeader from "./utils/ModalHeader";
import ModalBodyForSignUp from "./utils/ModalBodyForSignUp";
import logo from "../../images/logo.png";

function HeaderForNonAuthUser(props) {

  const login = () => {
    props.setModalHeader(<ModalHeader/>)
    props.setModalBody(<ModalBodyForLogin/>)
    props.showModal()
  }
  const signUp = () => {
    props.setModalHeader(<ModalHeader/>)
    props.setModalBody(<ModalBodyForSignUp/>)
    props.showModal()
  }
  return (
    <div className="relative overflow-hidden flex items-center justify-between p-4">
      <img className="h-12 w-48" src={logo} alt="logo"/>
      <div className="hidden md:inline-block">
        <span className="px-2 cursor-pointer">Возможности</span>
        <span className="px-2 cursor-pointer">Тарифы</span>
        <span className=" px-2 cursor-pointer">Собрать платформу</span>
      </div>
      <div className="">
        <span className="text-gold px-2 cursor-pointer" onClick={login}>Вход</span>
        <span className="text-gold px-2 cursor-pointer" onClick={signUp}>Регистрация</span>
      </div>
    </div>
  )
}

HeaderForNonAuthUser.propTypes = {
  showModal: PropTypes.func,
  setModalHeader: PropTypes.func,
  setModalBody: PropTypes.func,
  setModalFooter: PropTypes.func,
  serverUrl: PropTypes.string,
  tokenAuth: PropTypes.string
};

function mapStateToProps(state) {
  return {
    serverUrl: state.urls.serverUrl,
    tokenAuth: state.urls.tokenAuth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: () => dispatch(showModal()),
    setModalHeader: (elem) => dispatch(setModalHeader(elem)),
    setModalBody: (elem) => dispatch(setModalBody(elem)),
    setModalFooter: (elem) => dispatch(setModalFooter(elem)),
    loginUser: (user) => dispatch(loginUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForNonAuthUser)