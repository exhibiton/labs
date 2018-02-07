import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import Input from '../../../components/Input'
import styled from 'styled-components'

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

let Form = props => {
  const {
    error,
    handleSubmit,
    submitting,
  } = props

  return (
    <Container>
      <form onSubmit={ handleSubmit }>
        <Row >
          <Col>
            <div className="mb-3 pb-3">
              <label className="mb-3">First Name</label>
              <Field
                component={ Input }
                name="first_name"
                type="text" />
            </div>
            <div className="mb-3 pb-3">
              <label className="mb-3">Last Name</label>
              <Field
                component={ Input }
                name="last_name"
                placeholder="Doe"
                type="text" />
            </div>
            <div className="mb-3 pb-3">
              <label className="mb-3">Title</label>
              <Field
                component={ Input }
                name="title"
                placeholder="Co-Founder"
                type="text" />
            </div>
            <div className="mb-3 pb-3">
              <label className="mb-3">Email</label>
              <Field
                component={ Input }
                name="email"
                placeholder="John"
                type="text" />
            </div>
          </Col>
          <Col>
            <div className="mb-3 pb-3">
              <label className="mb-3">Twitter</label>
              <Field
                component={ Input }
                name="twitter"
                placeholder="elonmusk"
                type="text" />
            </div>
            <div className="mb-3 pb-3">
              <label className="mb-3">Facebook</label>
              <Field
                component={ Input }
                name="facebook"
                placeholder="markzuckerberg1"
                type="text" />
            </div>
            <div className="mb-3 pb-3">
              <label className="mb-3">LinkedIn</label>
              <Field
                component={ Input }
                name="linkedin"
                placeholder="seanjohn"
                type="text" />
            </div>
            <div className="mb-3 pb-3">
              <label className="mb-3">Github</label>
              <Field
                component={ Input }
                name="github"
                placeholder="gaeron"
                type="text" />
            </div>
          </Col>
        </Row>
        <StyledButton
          disable={ submitting }
          type="submit">
          Update Profile
        </StyledButton>
        {error}

      </form>
    </Container>
  )
}

Form.propTypes = {
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

Form = reduxForm({
  form: 'profileForm',
})(Form)

const mapStateToProps = state => ({
  initialValues: state.profile.user,
})

export default connect(mapStateToProps)(Form)
