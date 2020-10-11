import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import './header.scss'

import Badge from "react-bootstrap/Badge";
import {cancelConfirmEmail} from "../../redux/actions/actions";
import Logo from "../Logo/Logo";

function HeaderForNonAuthUser(props) {
  const user = props.user
  return (
    <>
      {!user.emailIsConfirm &&
      <div className="confirmEmail">Подтвердите адрес электронной почты
        <span className="float-right margin-border-10" onClick={props.cancelConfirmEmail}>x</span>
      </div>}
      <div className="header margin-border-10">

        <Logo/>
        <div className="float-right">
        <span className="nav-header d-none d-sm-inline">
          <span className="material-icons icons">
          live_help
          </span>
          <span>Документация</span>
        </span>
          <span className="divider margin-border-10 d-none d-sm-inline"/>
          <span className="nav-header d-none d-sm-inline">
            <span className="material-icons icons">account_balance_wallet</span>
            <span>{user.balance} ₽</span>
          <Badge variant="secondary">14 дн.</Badge>
        </span>
          <span className="divider margin-border-10 d-none d-sm-inline"/>
          <span className="nav-header">
            <span className="material-icons icons">
              notifications
            </span>
          <span>{user.name}</span>
          <span className="circle">{user.name[0]}</span>
          </span>
        </div>
        <Col>
          {/*<span className="modalOpen float-right" onClick={}>Вход</span>*/}
          {/*<span className="modalOpen float-right" onClick={}>Регистрация</span>*/}
        </Col>
      </div>
    </>
  )
}

HeaderForNonAuthUser.propTypes = {
  serverUrl: PropTypes.string,
  tokenAuth: PropTypes.string
};

function mapStateToProps(state) {
  return {
    serverUrl: state.urls.serverUrl,
    tokenAuth: state.urls.tokenAuth,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cancelConfirmEmail: () => dispatch(cancelConfirmEmail()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForNonAuthUser)