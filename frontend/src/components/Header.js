import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logout } from '../api/auth-api'
import PropTypes from 'prop-types'
import labs from '../assets/weworklabslogo.png'

import './styles/HeaderStyles.scss'

const Header = props =>
  <div>
    <div className="flex-row flex-vc flex-hb height phxl">
      <div>
        <img src={ labs } className="header-img" />
      </div>
      <div>
        <Link href="/" onClick={ props.logout }>
          Logout
        </Link>
      </div>
    </div>
    <hr />
  </div>

Header.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  logout,
}

export default connect(
  null,
  mapDispatchToProps
)(Header)
