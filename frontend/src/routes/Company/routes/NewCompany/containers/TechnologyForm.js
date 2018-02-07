import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field, change } from 'redux-form'
import styled from 'styled-components'
import _ from 'lodash'
import { createTechnology } from '../../../../../api/technology-api'
import Input from '../../../../../components/Input'
import UploadImage from './UploadImage'

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
    change,
  } = props

  const handleCreateTechnology = data => {
    // sending files - have to send FormData (multipart), not the plain JSON object
    const formData = new FormData()
  
    _.each(data, (value, key) => {
      return formData.append(key, value)
    })
  
    return createTechnology(formData)
  }
  
  return (
    <form onSubmit={ handleSubmit(handleCreateTechnology) }>
      <label htmlFor="technology">Technology Name</label>
      <Field
        className="mb-3"
        id="technology"
        component={Input}
        name="name"
        placeholder="JavaScript"
        type="text" />
      <UploadImage
        name="icon"
        change={image => change('technologyForm', 'icon', image)} />
      <div>
        <StyledButton className="btn" disabled={submitting} type="submit">Add</StyledButton>
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
  change,
}

const ConnectedTechnologyForm = connect(null, mapDispatchToProps)(TechnologyForm)

export default reduxForm({
  form: 'technologyForm',
})(ConnectedTechnologyForm)