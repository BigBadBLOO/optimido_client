import React, {useEffect} from 'react';
import {Route} from 'react-router-dom'
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {initStaticData, initUser} from "./redux/actions/actions";
import Home from "./assets/home/Home";
import Platform from "./assets/platform/Platform";
import workWithServer from "./core/workWithServer";

import GlobalLoader from "./components/Loader/Loader";

function Nav() {
  return (
    <div>
      <Route path="/" exact component={Home}/>
      {/*Настройки пользователя*/}
      <Route path="/settings/" exact component={Home}/>
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

function App({user, initUser, initStaticData}) {

  useEffect(() => {
    workWithServer.initUser().then(data => {
      Object.keys(data).length > 0 ? initUser(data) : initUser(user)
    }).catch(() => {initUser(user)})

    workWithServer.initStaticData().then(initStaticData)
    },[]
  )

  return (
    user.isInitial
      ? <Nav/>
      : <GlobalLoader/>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initUser: user => dispatch(initUser(user)),
    initStaticData: data => dispatch(initStaticData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  initStaticData: PropTypes.func.isRequired,
  initUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}