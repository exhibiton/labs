import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'
import Input from '../../../components/Input'
import { updatePassword } from '../modules/ProfileApi'

const StyledButton = styled.button`
  color: #fff;
  font-weight: 600;
  background: #1c1f2b;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: .875rem;
  padding: 1rem 3rem;
  line-height: 1;
  margin: 2rem 0 1rem;
  width: 100%;
`

const ProfileChangePasswordForm = props => {
  const {
    error,
    handleSubmit,
    submitting,
    updatePassword,
  } = props

  return (
    <form onSubmit={ handleSubmit(updatePassword) }>
      <div className="mb-3 pb-3">
        <label className="mb-3">New Password</label>
        <Field
          component={ Input }
          name="password"
          type="password" />
      </div>
      <div className="mb-3 pb-3">
        <label className="mb-3">New Password Confirmation</label>
        <Field
          component={ Input }
          name="password_confirmation"
          type="password" />
      </div>
      <div>
        <StyledButton disabled={ submitting } type="submit">Add</StyledButton>
        {error}
      </div>
    </form>
  )
}

ProfileChangePasswordForm.propTypes = {
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  updatePassword,
}

const ConnectedProfileChangePasswordForm = connect(null, mapDispatchToProps)(ProfileChangePasswordForm)

export default reduxForm({
  form: 'changePasswordForm',
})(ConnectedProfileChangePasswordForm)
