import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { getCategories } from '../../../../../api/category-api'
import { getTechnologies } from '../../../../../api/technology-api'
import {
  createCompany,
  getUsers,
} from '../modules/CreateCompanyApi'
import CompanyForm from './CompanyForm'
import DetailsFields from './DetailsFields'
import AddFoundersFields from './AddFoundersFields'
import AddTechnologiesFields from './AddTechnologiesFields'
import { ContentHolder } from './StyledComponents/TabContent'

const StyledNav = styled(Nav)`
  border-bottom: 1px solid #ddd;
  overflow: hidden;
`

const StyledNavItem = styled(NavItem)`
  margin: 0 2rem;
  text-transform: uppercase;
  display: inline-block;
  float: none;
`

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  padding: 0 0 1rem;
  font-size: 1rem;
  border: 0!important;
  border-bottom: 3px solid transparent!important;
  border-bottom-color: ${props => props.active ? '#1c1f2b' : 'white'}!important;
`

class NewCompany extends Component {
  state = {
    activeTab: '1'
  }

  componentDidMount() {
    const {
      getCategories,
      getUsers,
      getTechnologies,
    } = this.props

    getCategories()
    getUsers()
    getTechnologies()
  }

  handleCompanyCreate = ({ company }) => {
    const { createCompany, selectedUsersById, selectedTechnologiesById } = this.props

    const data = {
      ...company,
      users: selectedUsersById,
      tools: selectedTechnologiesById
    }
    
    // sending files - have to send FormData (multipart), not the plain JSON object
    const formData = new FormData()

    _.each(data, (companyValue, companyKey) => {
      if (_.isArray(companyValue)) {
        return _.each(companyValue, value => formData.append(`${companyKey}[]`, value))
      }

      return formData.append(companyKey, companyValue)
    })

    return createCompany(formData)
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    const {
      categories,
      users,
      technologies,
      error,
      isLoading,
    } = this.props

    return (
      <div>
        <h2 className="text-center my-5 py-3">
          <span className="color-bg-yellow">Create</span> Company
        </h2>
        <Container>
          <StyledNav className="justify-content-center" tabs={true}>
            <StyledNavItem>
              <StyledNavLink
                active={this.state.activeTab === '1'}
                onClick={() => this.toggle('1')}>
                GENERAL INFO
              </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink
                active={this.state.activeTab === '2'}
                onClick={() => this.toggle('2')}>
                ADD FOUNDERS
              </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink
                active={this.state.activeTab === '3'}
                onClick={() => this.toggle('3')}>
                SELECT TECHNOLOGIES
              </StyledNavLink>
            </StyledNavItem>
          </StyledNav>
        </Container>
        <ContentHolder wide={this.state.activeTab === '1'}>
          <CompanyForm
            error={ error }
            onSubmit={ this.handleCompanyCreate }
            submitting={ isLoading }>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <DetailsFields categories={ categories } />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <AddFoundersFields users={ users } />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <AddTechnologiesFields technologies={ technologies } />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CompanyForm>
        </ContentHolder>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    categories,
    technologies,
  } = state
  const { currentUser } = state.auth
  const {
    isLoading,
    error,
    selectedCategories,
    users,
    selectedUsers,
    selectedTechnologies,
  } = state.createCompany

  return {
    currentUser,
    isLoading,
    error,
    categories: categories.byId.map(id => categories.byHash[id]),
    users: users.byId.map(id => users.byHash[id]),
    selectedUsersById: selectedUsers.byId,
    technologies: technologies.byId.map(id => technologies.byHash[id]),
    selectedTechnologiesById: selectedTechnologies.byId,
    selectedCategories,
  }
}

const mapDispatchToProps = {
  createCompany,
  getCategories,
  getUsers,
  getTechnologies,
}

NewCompany.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  createCompany: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  selectedUsersById: PropTypes.arrayOf(PropTypes.number),
  technologies: PropTypes.arrayOf(PropTypes.object),
  getCategories: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  getTechnologies: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.object),
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany)
