import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { getCategories } from '../../api/category-api'
import { getTechnologies } from '../../api/technology-api'
import { createCompany, getCompany, updateCompany } from '../../api/company-api'
import { getUsers } from '../../api/user-api'
import Form from './Form'
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

class CompanyForm extends Component {
  static propTypes = {
    id: PropTypes.string,
    company: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    createCompany: PropTypes.func.isRequired,
    updateCompany: PropTypes.func.isRequired,
    getCompany: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object),
    categories: PropTypes.arrayOf(PropTypes.object),
    technologies: PropTypes.arrayOf(PropTypes.object),
    getUsers: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    getTechnologies: PropTypes.func.isRequired,
  }

  state = {
    activeTab: '1'
  }

  componentDidMount() {
    const {
      getCompany,
      getCategories,
      getUsers,
      getTechnologies,
      id,
    } = this.props

    getCategories()
    getUsers()
    getTechnologies()
    
    if (id) {
      getCompany(id)
    }
  }

  handleCompanyCreate = company => {
    const { id, createCompany, updateCompany } = this.props

    // sending files - have to send FormData (multipart), not the plain JSON object
    const formData = new FormData()

    _.each(company, (companyValue, companyKey) => {
      if (_.isArray(companyValue)) {
        return _.each(companyValue, value => formData.append(`${companyKey}[]`, value))
      }

      return formData.append(companyKey, companyValue)
    })

    if (id) {
      return updateCompany(id, formData)
    }

    return createCompany(formData)
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  getInitialState = () => {
    const { id, company } = this.props

    if (id && !_.isEmpty(company)) {
      return {
        ...company,
        users: company.users.map(({ id }) => id),
        tools: company.tools.map(({ id }) => id),
        categories: company.categories.map(({ id }) => id),
      }
    }
  }
  
  render() {
    const {
      categories,
      users,
      technologies,
      isLoading,
      id,
    } = this.props

    return (
      <div>
        <h2 className="text-center my-5 py-3">
          <span className="color-bg-yellow">{id ? 'Edit' : 'Create'}</span> Company
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
          <Form
            initialValues={this.getInitialState()}
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
          </Form>
        </ContentHolder>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, technologies, users, company }) => {
  return {
    company: company.data,
    isLoading: categories.isLoading || technologies.isLoading || users.isLoading,
    users: users.byId.map(id => users.byHash[id]),
    categories: categories.byId.map(id => categories.byHash[id]),
    technologies: technologies.byId.map(id => technologies.byHash[id]),
  }
}

const mapDispatchToProps = {
  createCompany,
  updateCompany,
  getCompany,
  getCategories,
  getUsers,
  getTechnologies,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm)
