import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PropTypes from 'prop-types'

import { createCompany } from '../modules/CreateCompanyApi'
import CreateCompanyForm from './Form'
import CompanyCreateTabLinks from '../../../../../components/CompanyCreateTabLinks'
import './NewCompanyStyles.scss'

class NewCompany extends React.Component {
  handleCompanyCreate = data =>
    this.props.createCompany(data)

  render() {
    const {
      error,
      isLoading,
    } = this.props

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
          <CreateCompanyForm
            error={ error }
            onSubmit={ this.handleCompanyCreate }
            submitting={ isLoading } />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { isLoading, error } = state.createCompany

  return {
    currentUser,
    isLoading,
    error,
  }
}

const mapDispatchToProps = {
  createCompany,
}

NewCompany.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  createCompany: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCompany)
