import React from 'react'
import { connect } from 'react-redux'
import { show as showModal } from 'redux-modal'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'
import { InputLight } from '../../../components/Input'
import ProfileChangePasswordForm from './ProfileChangePasswordForm'

const StyledButton = styled.button`
  color: #fff;
  font-weight: 600;
  background: #1c1f2b;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: .875rem;
  padding: 1rem 3rem;
  line-height: 1;
  margin: 1rem 0;
`

const StyledForm = styled.form`
  max-width: 47rem;
  padding: 0 1rem;
  margin: 0 auto 2rem;
`

const StyledColTitle = styled.div`
  text-transform: uppercase;
  color: #787882;
  margin-bottom: 2.5rem;
`

let Form = props => {
  const {
    error,
    handleSubmit,
    submitting,
    showModal,
  } = props

  return (
    <StyledForm onSubmit={ handleSubmit }>
      <Row>
        <Col>
          <StyledColTitle>Edit your personal settings</StyledColTitle>
          <div className="mb-3 pb-3">
            <label className="mb-3">First Name</label>
            <Field
              component={ InputLight }
              name="first_name"
              type="text" />
          </div>
          <div className="mb-3 pb-3">
            <label className="mb-3">Last Name</label>
            <Field
              component={ InputLight }
              name="last_name"
              placeholder="Doe"
              type="text" />
          </div>
          <div className="mb-3 pb-3">
            <label className="mb-3">Title</label>
            <Field
              component={ InputLight }
              name="title"
              placeholder="Co-Founder"
              type="text" />
          </div>
          <div className="mb-3 pb-3">
            <label className="mb-3">Email</label>
            <Field
              component={ InputLight }
              name="email"
              placeholder="John"
              type="text" />
          </div>
          <a
            onClick={ e => {
              e.preventDefault()
              showModal('defaultModal', { title: 'Change Password', content: <ProfileChangePasswordForm /> })
            } }
            href="#"
            className="text-uppercase text-underline color-dark">Change Password</a>
        </Col>
        <Col>
          <StyledColTitle>Social networks</StyledColTitle>
          <div className="mb-3 pb-3">
            <label className="mb-3">Twitter</label>
            <Field
              component={ InputLight }
              name="twitter"
              placeholder="elonmusk"
              type="text" />
          </div>
          <div className="mb-3 pb-3">
            <label className="mb-3">Facebook</label>
            <Field
              component={ InputLight }
              name="facebook"
              placeholder="markzuckerberg1"
              type="text" />
          </div>
          <div className="mb-3 pb-3">
            <label className="mb-3">LinkedIn</label>
            <Field
              component={ InputLight }
              name="linkedin"
              placeholder="seanjohn"
              type="text" />
          </div>
          <div className="mb-3 pb-3">
            <label className="mb-3">Github</label>
            <Field
              component={ InputLight }
              name="github"
              placeholder="gaeron"
              type="text" />
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <StyledButton
          disable={ submitting }
          type="submit">
          Save & Update
        </StyledButton>
      </div>
      {error}
    </StyledForm>
  )
}

Form.propTypes = {
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
}

Form = reduxForm({
  form: 'profileForm',
})(Form)

const mapStateToProps = state => ({
  initialValues: state.profile.user,
})

const mapDispatchToProps = {
  showModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
