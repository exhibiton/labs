import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'
import Fa from 'react-fontawesome'
import { Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { logout } from '../api/auth-api'

const StyledImg = styled.img.attrs({ alt: 'Company' })`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: 0 1rem 0 0;
`

const StyledDropdownToggle = styled(DropdownToggle)`
  background: none!important;
  color: #000!important;
  border: 0!important;
  box-shadow: none!important;

  &:after {
    display: none;
  }
`

const StyledDropdownItemLogout = styled(DropdownItem)`
  padding: 0;
  background: #282d3e!important;
  color: #fff!important;
  height: 2.5rem;
  font-size: .75rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: .3px;
  margin-top: 1.5rem;
  
  &:hover {
    cursor: pointer;
  }
`

const StyledHeaderItem = styled(DropdownItem).attrs({ header: true })`
  color: rgba(120, 120, 130, 0.7);
  font-size: .75rem;
`

const StyledLink = styled(Link)`
  color: #787882;
  text-decoration: underline;
`

const StyledDropdownMenu = styled(DropdownMenu)`
  border: 1px solid #eaeaea;
  border-radius: 0;
  padding-bottom: 0;
  width: 15rem;
  
  .dropdown-item:focus {
    background: inherit!important;
    color: inherit!important;
  }
`

class ProfileNav extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  }

  state = {
    dropdownOpen: false,
  }

  toggle = () =>
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })

  render() {
    const { currentUser, logout } = this.props

    if (_.isEmpty(currentUser) || currentUser.company === null) return null

    return (
      <Dropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
        <StyledDropdownToggle caret={ true }>
          <StyledImg src={ currentUser.company.logo } />
          <span className="mr-3">{currentUser.first_name}</span>
          <Fa name="angle-down" />
        </StyledDropdownToggle>
        <StyledDropdownMenu right={ true }>
          <StyledHeaderItem>Your account</StyledHeaderItem>
          <DropdownItem>
            <Row className="no-gutters align-items-center">
              <StyledImg src={ currentUser.company.logo } />
              <div className="t14">
                <div className="mb-2">{currentUser.first_name}</div>
                <StyledLink to={ `/profile/${currentUser.id}/edit` }>View profile</StyledLink>
              </div>
            </Row>
          </DropdownItem>
          <DropdownItem divider={ true } />
          <StyledHeaderItem>Your companies</StyledHeaderItem>
          <DropdownItem>
            <Row className="no-gutters align-items-center">
              <StyledImg src={ currentUser.company.logo } />
              <div className="t14">
                <div className="mb-2">{currentUser.company.name}</div>
                <StyledLink to={ `/company/${currentUser.company.id}/edit` }>Edit company</StyledLink>
              </div>
            </Row>
          </DropdownItem>
          <StyledDropdownItemLogout onClick={ logout }>Log out</StyledDropdownItemLogout>
        </StyledDropdownMenu>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav)
