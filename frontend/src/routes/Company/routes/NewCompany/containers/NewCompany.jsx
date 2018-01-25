import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import styled from 'styled-components'
import {
  createCompany,
  getCategories,
  getUsers,
  getTechnologies,
} from '../modules/CreateCompanyApi'
import CompanyForm from './CompanyForm'
import DetailsFields from './DetailsFields'
import AddMembersFields from './AddMembersFields'
import AddTechnologiesFields from './AddTechnologiesFields'

const StyledNav = styled(Nav)`
  border-bottom: 1px solid #ddd;
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
    const { createCompany } = this.props

    // sending files - have to send FormData (multipart), not the plain JSON object
    const formData = new FormData()

    _.each(company, (v, k) => formData.append(k, v))

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

    if (!categories.length || !users.length || !technologies.length) return null
    
    return (
      <div>
        <div className="mvxxl flex-row flex-hc thuge font-bold color-dark-grey">
          <div className="bg-yellow">Create</div>
          <div className="pls">Company</div>
        </div>
        <StyledNav className="flex-row flex-hc color-dark-blue" tabs={true}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => this.toggle('1')}>
              GENERAL INFO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => this.toggle('2')}>
              ADD FOUNDERS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => this.toggle('3')}>
              SELECT TECHNOLOGIES
            </NavLink>
          </NavItem>
        </StyledNav>
        <div className="flex-row flex-hc mtl mbm">
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
                    <AddMembersFields users={ users } />
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const {
    isLoading,
    error,
    categories,
    selectedCategories,
    users,
    technologies,
  } = state.createCompany

  return {
    currentUser,
    isLoading,
    error,
    categories,
    users,
    technologies,
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
  technologies: PropTypes.arrayOf(PropTypes.object),
  getCategories: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  getTechnologies: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.object),
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany)
