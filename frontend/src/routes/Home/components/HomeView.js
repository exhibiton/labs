import React from 'react'
import { browserHistory } from 'react-router'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

import './HomeViewStyle.scss'

class HomeView extends React.Component {
  static propTypes = {
    isLoading: propTypes.bool,
    currentUser: propTypes.object.isRequired,
  }

  componentDidMount() {
    this.runChecks()
  }

  componentDidUpdate() {
    this.runChecks()
  }

  runChecks() {
    const { isLoading, currentUser } = this.props

    if (isLoading) return false
    if (currentUser && currentUser.company === null) {
      browserHistory.push('/company/new')
    }
    else if (currentUser) {
      browserHistory.push('/company')
    }

    return true
  }
  render() {
    return (
      <div>
        <div className="flex-row">
          Loading
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser, isSigningIn } = state.auth

  return {
    isLoading: isSigningIn,
    currentUser,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
