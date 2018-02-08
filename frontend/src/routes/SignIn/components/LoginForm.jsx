import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import Input from '../../../components/Input'

const LoginForm = props => {
  const { error, handleSubmit, submitting } = props;

  return (
    <form onSubmit={ handleSubmit }>
      {error && <div className="mb-3 color-red"><strong>{error}</strong></div>}
      <Field
        className="mb-3"
        component={ Input }
        name="email"
        type="input"
        placeholder="Email Address" />
      <Field
        className="mb-3"
        component={ Input }
        name="password"
        type="password"
        placeholder="Password" />
      <div className="mvs">
        <button className="btn btn-dark" type="submit" disabled={ submitting }>
          Log In
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default reduxForm({
  form: 'LoginForm',
})(LoginForm)
