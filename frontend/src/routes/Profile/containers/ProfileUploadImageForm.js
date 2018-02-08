import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, change } from 'redux-form'
import styled from 'styled-components'
import _ from 'lodash'
import { uploadPhoto } from '../modules/ProfileApi'
import UploadImage from '../../../components/UploadImage'

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

let ProfileUploadImageForm = props => {
  const {
    error,
    handleSubmit,
    submitting,
    uploadPhoto,
    change,
  } = props

  const handleUploadPhoto = data => {
    // sending files - have to send FormData (multipart), not the plain JSON object
    const formData = new FormData()

    _.each(data, (value, key) => formData.append(key, value))

    return uploadPhoto(formData)
  }

  return (
    <form onSubmit={ handleSubmit(handleUploadPhoto) }>
      <UploadImage
        change={ image => change('profileUploadImageForm', 'avatar', image) }
        name="avatar" />
      <div>
        <StyledButton className="btn" disabled={ submitting } type="submit">Upload new avatar</StyledButton>
        {error}
      </div>
    </form>
  )
}

ProfileUploadImageForm.propTypes = {
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  uploadPhoto: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  uploadPhoto,
  change,
}

ProfileUploadImageForm = connect(null, mapDispatchToProps)(ProfileUploadImageForm)

export default reduxForm({
  form: 'profileUploadImageForm',
})(ProfileUploadImageForm)
