import React, {useState} from "react"
import Button from "../../Button/Button"
import {connect} from "react-redux";
import ModalButtonForContent from "./ModalButtonForContent";
import {loginUser} from "../../../redux/actions/actions";
import {useCookies} from 'react-cookie';
import {requestPost} from "../../../core/utils";
import PropTypes from "prop-types";

function ModalBodyForSignUp(props) {
  const urls = props.urls

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validPassword2, setValidPassword2] = useState(true);

  const [, setCookie] = useCookies(['']);

  const signUp = (e) => {
    e.preventDefault()
    const validName = !!name
    const validEmail = email && email.includes('@') && email.includes('.')
    const passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])")
    const validPassword = password.length >= 8 && passwordRegex.test(password)
    const validPassword2 = password === password2
    setValidName(validName)
    setValidEmail(validEmail)
    setValidPassword(validPassword)
    setValidPassword2(validPassword2)

    if (validEmail && validPassword) {
      requestPost(urls.serverUrl + urls.signUp, {
          "name": name,
          "email": email,
          "password": password
        },
        (data) => {
          const user = data
          props.loginUser(user)
          setCookie('token', user.token, {path: '/', maxAge: 1800});
        },
        () => setValidEmail(false)
      )
    }

  }
  return (
    <div>
      <ModalButtonForContent type='signUp'/>
      <form className="pt-4" onSubmit={signUp}>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="name">
            Ваше имя
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gold"
            id="name"
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setValidName(true)
            }}
          />
          {!validName && <label className="text-xs text-red-400 pl-2">Неверное имя</label>}
        </div>
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
          {!validEmail &&
          <label className="text-xs text-red-400 pl-2">Некорректная почта или уже зарегистрирована</label>}
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
          {!validPassword &&
          <label className="text-xs text-red-400 pl-2">Пароль должен состоять из не менее 8 латинских символов, 1
            заглавной
            буквы, и 1 цифры</label>}
        </div>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="password2">
            Подтвердите пароль
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gold"
            id="password2"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => {
              setPassword2(e.target.value);
              setValidPassword2(true)
            }}
          />
          {!validPassword2 && <label className="text-xs text-red-400 pl-2">Пароли не совпадают</label>}
        </div>
        <div className="mb-4">
          <span>Забыли пароль?</span>
        </div>
        <div className="mb-4">
          <Button classes="rounded w-full bg-gold text-white text-1x py-1 focus:outline-none" text="Зарегистрироваться"
                  type="submit"/>
        </div>
      </form>

    </div>
  )
}

ModalBodyForSignUp.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalBodyForSignUp)
