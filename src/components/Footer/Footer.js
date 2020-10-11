import React from "react";
import {Link} from "react-router-dom"
import {Col, Row} from "react-bootstrap";
import './footer.scss'

function Footer(props) {
  return (
    <Row className='footer'>
      <Col>OPTIMIDO</Col>
      <Col md="auto" className="d-none d-lg-block">
        <Link className="hrefToSource" to="/userAgreement/">
          <span className="anchor">Пользовательское соглашение</span>
        </Link>
        <span className="rightBorder"/>
        <Link className="hrefToSource" to="/privacyPolicy/">
          <span className="anchor">Политика конфиденциальности</span>
        </Link>
      </Col>
      <Col>
        <span className="float-right">@ 2020 Optimido</span>
      </Col>
    </Row>
  )
}

export default Footer