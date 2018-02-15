import React from 'react'
import { ssoLogin } from '../modules/SsoApi'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AtomSpinner } from 'react-epic-spinners'
import styled from 'styled-components'


const StyledDiv = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
`

class SingleSignOn extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      query: PropTypes.shape({
        sso: PropTypes.string.isRequired,
        sig: PropTypes.string.isRequired,
      }),
    }),
    ssoLogin: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { location: { query: { sso, sig } }, ssoLogin, user } = this.props

    ssoLogin(sig, sso, user.id)
  }

  render() {
    return (
      <StyledDiv>
        <div className="text-center mb-3 h4">Redirecting you...</div>
        <AtomSpinner color="red" size="200" />
      </StyledDiv>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
})

const mapDispatchToProps = {
  ssoLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleSignOn)
