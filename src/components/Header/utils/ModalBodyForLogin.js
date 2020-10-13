import React, {useState} from "react"
import {connect} from "react-redux";
import PropTypes from "prop-types";

import ModalButtonForContent from "./ModalButtonForContent";
import {loginUser} from "../../../redux/actions/actions";
import Button from "../../Button/Button"
import workWithServer from "../../../core/workWithServer";

function ModalBodyForLogin({loginUser}) {

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);

  const login = (e) => {
    e.preventDefault()
    const validEmail = email && email.includes('@') && email.includes('.')
    const validPassword = !!password
    setValidEmail(validEmail)
    setValidPassword(password)

    if (validEmail && validPassword) {
      workWithServer.login({
        "email": email,
        "password": password
      }, loginUser, () => setValidEmail(false))
    }

  }
  return (
    <div>
      <ModalButtonForContent type='login'/>
      <form className="pt-4" onSubmit={login}>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="email">
            Эл. почта
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gold"
            id="email"
            type="text"
            placeholder="Введите эл. почту"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setValidEmail(true)
            }}
          />
          {!validEmail && <label className="text-xs text-red-400 pl-2">Некорректная почта</label>}
        </div>

        <div className="mb-2">
          <label className="block mb-1" htmlFor="password">
            Пароль
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gold"
            id="password"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => {
              setPassword(e.target.value);
              setValidPassword(true)
            }}
          />
          {!validPassword && <label className="text-xs text-red-400 pl-2">Некорректный пароль</label>}
        </div>

        <div className="mb-2">
          <span>Забыли пароль?</span>
        </div>
        <div className="mb-2 text-center">
          <Button text="Войти в аккаунт" type="primary"/>
        </div>
      </form>
    </div>
  )
}

ModalBodyForLogin.propTypes = {
  loginUser: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(ModalBodyForLogin)
