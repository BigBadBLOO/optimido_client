import React, {useEffect} from 'react';
import {Route} from 'react-router-dom'
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {initUser} from "./redux/actions/actions";
import Home from "./assets/home/Home";
import Platform from "./assets/platform/Platform";
import workWithServer from "./core/workWithServer";

import GlobalLoader from "./components/Loader/Loader";

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

function App({user, initUser}) {

  useEffect(() => {
    workWithServer.initUser(initUser, () => {initUser({email: ''})})
    },[initUser]
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
    initUser: user => dispatch(initUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  user: PropTypes.object,
  initUser: PropTypes.func,
};