import React from 'react'
import PropTypes from 'prop-types'
import { connectModal } from 'redux-modal'
import styled from 'styled-components'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const StyledModal = styled(Modal)`
  margin-right: 0;
  margin-top: 0;
  border-radius: 0;
  height: 100%;
  
  .modal-content {
    height: 100%;
    border-radius: 0;
    border: 0;
  }
  
  @media (min-width: 576px) {
    max-width: 32.5rem;
  }
`

const StyledModalHeader = styled(ModalHeader)`
  border: 0;
  padding: 2.5rem 2rem 2rem;
  
  .modal-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

const DefaultModal = ({ show, handleHide, title, content }) =>
  <div>
    <StyledModal
      backdrop={true}
      toggle={handleHide}
      isOpen={show}>
      <StyledModalHeader>{title}</StyledModalHeader>
      <ModalBody>{content}</ModalBody>
    </StyledModal>
  </div>

DefaultModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleHide: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.element,
}

export default connectModal({
  name: 'defaultModal'
})(DefaultModal)
