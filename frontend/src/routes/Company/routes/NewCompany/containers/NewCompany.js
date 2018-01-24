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

    // photos is a nested attribute for this action
    const listOfNestedAttributes = ['logo']
    // venue in props will be nil for new action
    const preparedData = diffForNestedAttributes({}, data, listOfNestedAttributes)
    console.log('diffForNestedAttributes', { data, listOfNestedAttributes })
    // when we receive data from the server image would be a URL pointing to the image;
    // when we send data to server image should be a File instance; therefore, do not send
    // those one which are string (URLs), because there's no sense to send them back
    // (except if they are marked for destroy)
    _.each(preparedData.photos_attributes, photo => {
      if (_.isString(photo.image)) {
        delete photo.image
      }
    })
    
    // sending files - have to send FormData (multipart), not the plain JSON object
    console.log({ preparedData })
    const formData = hashToFormData(preparedData, 'company')
    
    console.log(formData)
    
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
