import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logout } from '../api/auth-api'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import DefaultModal from './DefaultModal'

// TODO: Use SVG
import labsLogo from '../assets/weworklabslogo.png'

const StyledHeader = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`

const StyledLogo = styled.img.attrs({ alt: 'Labs logo', src: labsLogo })`
  height: 2.8rem;
`

const Header = ({ logout }) =>
  <StyledHeader>
    <Container>
      <Row className="align-items-center justify-content-between">
        <Link to="/"><StyledLogo /></Link>
        <div><button className="btn" onClick={ logout }>Logout</button></div>
      </Row>
    </Container>
    <DefaultModal />
  </StyledHeader>

Header.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(Header)
