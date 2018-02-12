import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import { getCompany } from '../../../../../api/company-api'
import UserList from './UserList'
import ToolList from './ToolList'
import CategoryList from './CategoryList'

const StyledContainer = styled(Container)`
  max-width: 40rem;
`

const StyledImgLogo = styled.img`
  overflow: hidden;
  border-radius: 50%;
  max-width: 12rem;
`

class CompanyDetails extends Component {
  componentDidMount() {
    this.props.getCompany(this.props.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id) {
      this.props.getCompany(this.props.params.id)
    }
  }

  render() {
    const { company, params } = this.props

    if (_.isEmpty(company) || `${company.id}` !== params.id) return null

    return (
      <StyledContainer className="mt-5 text-center">
        <StyledImgLogo src={ company.logo } />
        <h2 className="mt-4 mb-2 font-weight-bold">{ company.name }</h2>
        <div className="pb-3 mb-3 color-grey">{ company.website || 'No website'}</div>
        <CategoryList className="pb-3 mb-3" categories={ company.categories } />
        <div className="pb-3 mb-3 color-dark-grey">{ company.description }</div>
        <UserList className="mb-5" users={ company.users } />
        <ToolList className="mb-5" tools={ company.tools } />
      </StyledContainer>
    )
  }
}

const mapStateToProps = ({ company }) => ({
  company: company.data,
})

const mapDispatchToProps = {
  getCompany,
}

CompanyDetails.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  params: PropTypes.objectOf(PropTypes.string),
  getCompany: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)
