import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import hashToFormData from '../../../../../api/utils/hash-to-form-data'
import diffForNestedAttributes from '../../../../../api/utils/diff-for-nested-attributes'
import { createCompany } from '../modules/CreateCompanyApi'
import CreateCompanyForm from './Form'
import CompanyCreateTabLinks from '../../../../../components/CompanyCreateTabLinks'
import './NewCompanyStyles.scss'

class NewCompany extends React.Component {
  handleCompanyCreate = data => {
    const { createCompany } = this.props
  
    console.log(data.company)
    
    // when we receive data from the server image would be a URL pointing to the image;
    // when we send data to server image should be a File instance; therefore, do not send
    // those one which are string (URLs), because there's no sense to send them back
    // (except if they are marked for destroy)
//    if (_.isString(data.logo)) {
//      delete data.logo
//    }
    
    // sending files - have to send FormData (multipart), not the plain JSON object
    const formData = new FormData()
    _.each(data.company, (v, k) => {
      formData.append(k, v)
    })

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1])
    }
    
    return createCompany({ company: formData})
  }
  
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
