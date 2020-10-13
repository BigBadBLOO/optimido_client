import React from "react";
import {connect} from "react-redux";

import MyModal from "../../components/Modal/Modal";
import HeaderForNonAuthUser from "../../components/Header/HeaderForNonAuthUser";
import HeaderForAuthUser from "../../components/Header/HeaderForAuthUser";

import Footer from "../../components/Footer/Footer";
import BodyForNonAuthUser from "../../components/Body/ForNonAuthUser/BodyForNonAuthUser";
import BodyForAuthUser from "../../components/Body/ForAuthUser/BodyForAuthUser";
import PropTypes from "prop-types";

function Home({user}) {
  return (
    user.isAuth
      ?
      <>
        <HeaderForAuthUser/>
        <BodyForAuthUser/>
      </>
      :
      <>
        <HeaderForNonAuthUser/>
        <BodyForNonAuthUser/>
        <Footer/>
        <MyModal/>
      </>
  )
}


function mapStateToProps(state) {
  return {
    user: state.user,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // loginUser: () => dispatch(loginUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.propTypes = {
  user: PropTypes.object,
};