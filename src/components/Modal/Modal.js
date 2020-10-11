import React from "react";
import {connect} from "react-redux";
import './modal.scss'
import PropTypes from "prop-types";
import {showModal} from "../../redux/actions/actions";
import CSSTransition from "react-transition-group/CSSTransition";

function MyModal(props) {

  return (
    <CSSTransition in={props.show} timeout={200} unmountOnExit classNames="myModalAnimation">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={props.showModal}/>
        </div>
        <div className="flex justify-center py-12 px-8">
          <div
            className="rounded shadow-xl transform transition-all my-8 sm:max-w-lg w-full"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white rounded p-4">
              {props.header}
              {props.body}
              {props.footer}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
    // <Modal show={props.show} onHide={props.showModal}>
    //     <Modal.Header>
    //       <Container>
    //         <div className="modalHeader">{props.header}</div>
    //         <div className="modalBody">{props.body}</div>
    //         <div className="modalFooter">{props.footer}</div>
    //       </Container>
    //     </Modal.Header>
    //   </Modal>
  )
}

MyModal.propTypes = {
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  header: PropTypes.object,
  body: PropTypes.object,
  footer: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    show: state.modal.show,
    header: state.modal.header,
    body: state.modal.body,
    footer: state.modal.footer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: () => dispatch(showModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyModal)