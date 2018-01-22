import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

const LoginForm = props => {
  const { error, handleSubmit, submitting } = props;

  return (
    <form className="mts mbm" onSubmit={ handleSubmit }>
      {error && <div className="mbs color-red"><strong>{error}</strong></div>}
      <Field
        name="email"
        component="input"
        type="input"
        label="Email Address"
        placeholder="Email Address"
        className="mts w-100" />
      <Field
        name="password"
        component="input"
        type="password"
        label="Password"
        placeholder="Password"
        className="mts w-100" />
      <div className="mvs">
        <button className="ww-btn-primary w-100" type="submit" disabled={ submitting }>
          Log In
        </button>
      </div>
    </form>
  )
}

LoginForm.PropTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default reduxForm({
  form: 'LoginForm',
})(LoginForm)

