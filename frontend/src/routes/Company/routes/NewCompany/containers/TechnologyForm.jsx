import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'
import { createTechnology } from '../../../../../api/technology-api'
import Input from '../../../../../components/Input'

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

const TechnologyForm = props => {
  const {
    error,
    handleSubmit,
    submitting,
    createTechnology,
  } = props

  return (
    <form onSubmit={ handleSubmit(createTechnology) }>
      <label htmlFor="technology">Technology Name</label>
      <Field
        id="technology"
        component={Input}
        name="name"
        placeholder="JavaScript"
        type="text" />
      
      <div>
        <StyledButton disable={submitting} type="submit">Add</StyledButton>
        {error}
      </div>
    </form>
  )
}

TechnologyForm.propTypes = {
  change: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  createTechnology: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  createTechnology,
}

const ConnectedTechnologyForm = connect(null, mapDispatchToProps)(TechnologyForm)

export default reduxForm({
  form: 'technologyForm',
})(ConnectedTechnologyForm)