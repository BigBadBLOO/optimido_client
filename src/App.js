import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Route} from 'react-router-dom'
import {initUser} from "./redux/actions/actions";
import request from "./core/utils";
import Home from "./assets/home/Home";
import {useCookies} from "react-cookie";

import Platform from "./assets/platform/Platform";
import './App.scss';
function Nav() {
  return (
    <div>
      <Route path="/" exact component={Home}/>
      {/*демо версия платформы*/}
      <Route path="/demo/" exact component={Home}/>
      {/*пользовательское соглашение*/}
      <Route path="/userAgreement/" exact component={Home}/>
      {/*политика конфиденциальности*/}
      <Route path="/privacyPolicy/" exact component={Home}/>
      {/*выбранная платформа*/}
      <Route path="/platforms/:platformId/:page?/" component={Platform}/>
    </div>
  )
}

function Loader() {
  return (
    <div className="preloader">
      <div className="preloader__loader">
        <div className="spinner-grow text-danger" role="status" style={{width: '4rem', height: '4rem'}}>
          <span className="sr-only">Загрузка...</span>
        </div>
      </div>
    </div>
  )
}

function App(props) {
  const urls = props.urls
  const [cookies,] = useCookies(['token']);
  useEffect(() => {
      request(urls.serverUrl + urls.initializeUser, {
          method: 'GET',
          headers: {
            Authorization: `JWT ${cookies.token}`
          },
        },
        (data) => props.initUser(data),
        () => props.initUser({email: ''}))
    },
    ['cookies.token']
  )

  return (
    props.user.isInitial
      ? <Nav/>
      : <Loader/>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
    urls: state.urls,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initUser: user => dispatch(initUser(user))
  }
}

App.propTypes = {
  user: PropTypes.object,
  initUser: PropTypes.func,
  setModalBody: PropTypes.func,
  setModalFooter: PropTypes.func,
  urls: PropTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
