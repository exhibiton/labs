import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { createCompany, getCategories } from '../modules/CreateCompanyApi'
import { selectCategories } from '../modules/CreateCompanyActions'
import CreateCompanyForm from './Form'
import CompanyCreateTabLinks from '../../../../../components/CompanyCreateTabLinks'
import './NewCompanyStyles.scss'

class NewCompany extends React.Component {
  componentDidMount() {
    const { getCategories } = this.props

    getCategories()
  }
  handleCompanyCreate = ({ company }) => {
    const { createCompany } = this.props

    // sending files - have to send FormData (multipart), not the plain JSON object
    const formData = new FormData()

    _.each(company, (v, k) => formData.append(k, v))

    return createCompany(formData)
  }

  renderForm = () => {
    const {
      categories,
      error,
      isLoading,
      selectedCategories,
    } = this.props

    if (!_.isEmpty(categories)) {
      return (
        <CreateCompanyForm
          error={ error }
          onSubmit={ this.handleCompanyCreate }
          submitting={ isLoading }
          options={ categories }
          selectedOptions={ selectedCategories }
          handleSelectChange={ selectCategories } />
      )
    }
    return <div />
  }

  render() {
    return (
      <div className="">
        <div className="mvxxl flex-row flex-hc thuge font-bold color-dark-grey">
          <div className="bg-yellow">Create</div>
          <div className="pls">Company</div>
        </div>
        <div className="flex-row flex-hc color-dark-blue">
          <CompanyCreateTabLinks />
        </div>
        <hr className="hr-spacing" />
        <div className="flex-row flex-hc t1 mvm">
          { this.renderForm() }
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { isLoading, error, categories, selectedCategories } = state.createCompany

  return {
    currentUser,
    isLoading,
    error,
    categories,
    selectedCategories,
  }
}

const mapDispatchToProps = {
  createCompany,
  getCategories,
}

NewCompany.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  createCompany: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  getCategories: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.object),
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany)
