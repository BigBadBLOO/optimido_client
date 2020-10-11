import React, {useState} from "react"
import Button from "../../Button/Button"
import {connect} from "react-redux";
import ModalButtonForContent from "./ModalButtonForContent";
import {loginUser} from "../../../redux/actions/actions";
import {useCookies} from 'react-cookie';
import {requestPost} from "../../../core/utils";
import PropTypes from "prop-types";

function ModalBodyForLogin({urls, loginUser}) {

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [, setCookie] = useCookies(['']);

  const login = (e) => {
    e.preventDefault()
    const validEmail = email && email.includes('@') && email.includes('.')
    const validPassword = !!password
    setValidEmail(validEmail)
    setValidPassword(password)

    if (validEmail && validPassword) {
      requestPost(urls.serverUrl + urls.login, {
          "email": email,
          "password": password
        },
        (data) => {
          const user = data
          loginUser(user)
          setCookie('token', user.token, {path: '/', maxAge: 1800});
        },
        () => setValidEmail(false)
      )
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
        <div className="mb-2">
          <Button classes="rounded w-full bg-gold text-white text-1x py-1 focus:outline-none" text="Войти в аккаунт" type="submit"/>
        </div>
      </form>
    </div>
  )
}

ModalBodyForLogin.propTypes = {
  urls: PropTypes.object,
  loginUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    urls: state.urls,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBodyForLogin)
