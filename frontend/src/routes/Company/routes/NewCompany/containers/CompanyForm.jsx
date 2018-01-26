import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, reduxForm } from 'redux-form'
import styled from 'styled-components'
import './FormStyles.scss'

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
        <StyledButton
          disable={ `${submitting}` }
          type="submit">
          Create Company
        </StyledButton>
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
