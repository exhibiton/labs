import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: #fff;
  font-weight: 600;
  background: #1c1f2b;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: .875rem;
  padding: 1rem 3rem;
  line-height: 1;
`

const Form = props => {
  const {
    error,
    handleSubmit,
    submitting,
    children,
    buttonText,
  } = props

  return (
    <form onSubmit={ handleSubmit }>
      {children}

      <div className="mvm">
        <StyledButton
          className="btn"
          disabled={ submitting }
          type="submit">
          {buttonText}
        </StyledButton>
        {error}
      </div>
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.element.isRequired,
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default reduxForm({
  form: 'companyForm',
})(Form)
