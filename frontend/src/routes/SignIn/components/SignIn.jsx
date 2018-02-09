import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { login } from '../../../api/auth-api'
import LabsLogo from '../assets/WeWorkLabsLogo.png'
import background from '../assets/background.jpg'
import LoginForm from './LoginForm'
import SocialFooter from './SocialFooter'

const StyledColBg = styled(Col)`
  background-image: url(${background});
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1.5;
`

const StyledCol = styled(Col)`
  max-width: 25rem;
`

class SignIn extends React.Component {
  static propTypes = {
    login: propTypes.func.isRequired,
  }

  handleSignIn = data =>
    this.props.login(data)

  render() {
    return (
      <Row className="no-gutters">
        <StyledColBg />
        <StyledCol>
          <div className="text-center">
            <img width={ 200 } src={ LabsLogo } alt="WeWork Labs Logo" />
          </div>
          <div className="py-5 px-4">
            <div className="text-center">
              <h2>Hello</h2>
              <p>Some text about wework labs and how dope and exclusive it is.</p>
            </div>
            <LoginForm onSubmit={ this.handleSignIn } />
          </div>
          <SocialFooter />
        </StyledCol>
      </Row>
    )
  }
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(SignIn)
