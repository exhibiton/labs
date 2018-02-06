import React from 'react'
import { Field, reduxForm } from 'redux-form'
import propTypes from 'prop-types'

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
        placeholder="Email Address" />
      <Field
        name="password"
        component="input"
        type="password"
        label="Password"
        placeholder="Password" />
      <div className="mvs">
        <button type="submit" disabled={ submitting }>
          Log In
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  error: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
  submitting: propTypes.bool,
}

export default reduxForm({
  form: 'LoginForm',
})(LoginForm)

