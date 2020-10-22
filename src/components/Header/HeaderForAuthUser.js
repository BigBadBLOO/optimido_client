import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {cancelConfirmEmail} from "../../redux/actions/actions";
import Logo from "../Logo/Logo";


function HeaderForNonAuthUser({user, cancelConfirmEmail}) {

  return (
    <>
      {
        !user.emailIsConfirm &&
        <div className="text-center text-white bg-blue-600 px-1">
          Подтвердите адрес электронной почты
          <span className="float-right margin-border-10" onClick={cancelConfirmEmail}>x</span>
        </div>
      }

      <div className="flex justify-between h-16 p-2 bg-white">
        <Logo/>
        <div className="md:divide-x divide-gray-400 divide-opacity-50">
          <span className="hidden  md:inline-block text-gray-600 px-4">
            <span className="material-icons align-middle px-2">
              live_help
            </span>
            <span>Документация</span>
          </span>
          <span className="hidden md:inline-block text-gray-600 px-4">
            <span className="material-icons align-middle px-2">account_balance_wallet</span>
            <span>{user.balance} ₽</span>
            <span className="align-top text-xs bg-green-200 text-green-800 rounded m-1 p-1 bg-opacity-50">14 дн.</span>
          </span>
          <span className="text-gray-600">
            <span className="material-icons align-middle px-2">
              notifications
              <span className="absolute -ml-2 animate-ping inline-flex h-2 w-2 rounded-full bg-pink-400 opacity-75"/>
              <span className="absolute -ml-3 rounded-full h-3 w-4 bg-white"/>
              <span className="absolute -ml-2 rounded-full h-2 w-2 bg-pink-500"/>
            </span>
            <span className="pl-2 font-semibold text-black">{user.name}</span>
            <div className="cursor-pointer inline-block">
              <span className="material-icons align-middle px-1 ">
                keyboard_arrow_down
              </span>
              <span
                className="rounded-full bg-gray-400 text-gray-700 p-2 text-center h-10 w-10 inline-block font-bold">
                {user.name[0]}</span>
            </div>
          </span>
        </div>
      </div>
    </>
  )
}

HeaderForNonAuthUser.propTypes = {
  user: PropTypes.object,
  cancelConfirmEmail: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cancelConfirmEmail: () => dispatch(cancelConfirmEmail()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForNonAuthUser)