
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from '../../../api/auth-api'
import LabsLogo from '../assets/WeWorkLabsLogo.png'
import LoginForm from './LoginForm'
import SocialFooter from './SocialFooter'
import './SignInStyle.scss'

class SignIn extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  handleSignIn = data =>
    this.props.login(data)

  render() {
    return (
      <div>
        <div className="flex-row">
          <div className="bg" />
          <div className="flex-column">
            <img src={ LabsLogo } alt={ 'WeWork Labs Logo' } className="labs-logo" />
            <div className="mal side-container">
              <h2 className="text-center">Hello</h2>
              <p className="text-center">Some text about wework labs and how dope and exclusive it is.</p>
              <LoginForm
                onSubmit={ this.handleSignIn } />
            </div>
            <div className="mal side-container">
              <SocialFooter />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(SignIn)
