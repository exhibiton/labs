import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, reduxForm } from 'redux-form'
import './FormStyles.scss'

const CompanyForm = props => {
  const {
    error,
    handleSubmit,
    submitting,
    children,
  } = props

  return (
    <form onSubmit={ handleSubmit }>
      <FormSection name="company">
        {children}
      </FormSection>

      <div className="mvm">
        <button
          className="btn-submit t4 color-white font-semibold"
          disable={ `${submitting}` }
          type="submit">
          Submit
        </button>
        {error}
      </div>
    </form>
  )
}

CompanyForm.propTypes = {
  change: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'companyForm',
})(CompanyForm)
