import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import DefaultModal from './DefaultModal'
import ProfileNav from './ProfileNav'
import SearchCompany from './SearchCompany'

// TODO: Use SVG
import labsLogo from '../assets/weworklabslogo.png'

const StyledHeader = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`

const StyledLogo = styled.img.attrs({ alt: 'Labs logo', src: labsLogo })`
  height: 2.8rem;
`

const StyledLink = styled(Link)`
  width: 47px;
  height: 19px;
  font-size: 16px;
  text-align: left;
  color: #282d3e;
  &:hover {
    color: #282d3e;
    background: #ffed98;
  }
  text-decoration: none!important;
`

const StyledA = styled.a`
  width: 47px;
  height: 19px;
  font-size: 16px;
  text-align: left;
  color: #282d3e;
  &:hover {
    background: #ffed98;
    text-decoration: none;
    color: #282d3e;
  }
`

const Header = () =>
  <StyledHeader>
    <Container>
      <Row className="no-gutters align-items-center justify-content-between">
        <Row className="no-gutters align-items-center justify-content-between">
          <Link to="/"><StyledLogo /></Link>
          <SearchCompany />
        </Row>
        <StyledLink to="/" style={ [{ textDecoration: 'none' }] }> Companies </StyledLink>
        <StyledA href="http://discuss.notarea51.com/">Discussion </StyledA>
        <ProfileNav />
      </Row>
    </Container>
    <DefaultModal />
  </StyledHeader>

export default Header
