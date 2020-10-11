import React from "react";
import './home.scss'
import MyModal from "../../components/Modal/Modal";
import HeaderForNonAuthUser from "../../components/Header/HeaderForNonAuthUser";
import HeaderForAuthUser from "../../components/Header/HeaderForAuthUser";
import {connect} from "react-redux";
import Footer from "../../components/Footer/Footer";
import BodyForNonAuthUser from "../../components/Body/ForNonAuthUser/BodyForNonAuthUser";
import BodyForAuthUser from "../../components/Body/ForAuthUser/BodyForAuthUser";




function Home(props) {
  return (
    props.user.isAuth
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