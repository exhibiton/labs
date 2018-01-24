import React from 'react'
import { Field, FormSection, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import Select from 'react-select';

import './styles/FormStyles.scss'
import dropzonePlaceholder from '../../../../../assets/dropzonePlaceholder.png'

const CreateCompanyForm = props => {
  const {
    error,
    handleSubmit,
    submitting,
  } = props

  // placeholders until backend is done
  const categories = [
    { label: 'Marketplace', value: 'Marketplace' },
    { label: 'SaaS', value: 'SaaS' },
    { label: 'B2B', value: 'B2B' },
    { label: 'B2C', value: 'B2C' },
    { label: 'Enterprise', value: 'Enterprise' },
    { label: 'EdTech', value: 'EdTech' },
  ];
  const handleSelectChange = () => {
    // probably should do something here
  }

  return (
    <form onSubmit={ handleSubmit }>
      <FormSection name="company">
        <div className="flex-row flex-col-mobile flex-hc">
          <div className="flex-col mhl">
            <div className="flex-col flex-col-mobile">
              <label className="t3 pvs color-dark-grey font-semibold">Company Name</label>
              <Field
                component="input"
                className="input-field t4"
                name="name"
                placeholder="  WeWork"
                type="text" />
            </div>
            <div className="flex-col flex-col-mobile">
              <label className="t3 pvs color-dark-grey font-semibold">Website URL</label>
              <Field
                component="input"
                className="input-field t4"
                name="website"
                placeholder="  www.wework.com"
                type="text" />
            </div>
            <div className="flex-col flex-col-mobile">
              <label className="t3 pvs color-dark-grey font-semibold">Description</label>
              <Field
                component="textarea"
                className="input-textarea t4"
                name="description"
                placeholder="  Greatest company on Earth..."
                type="textarea" />
            </div>
          </div>
          <div className="flex-col mhl">
            <div>
              <img src={ dropzonePlaceholder } className="dropzone" />
            </div>
            <div>
              <label className="t3 color-dark-grey font-semibold">Categories</label>
              <Select
                className="t3"
                closeOnSelect={ false }
                disabled={ false }
                multi={ true }
                onChange={ handleSelectChange }
                options={ categories }
                placeholder="Select Categories"
                rtl={ false }
                simpleValue={ true }
                value={ [] } />
            </div>
          </div>
        </div>
      </FormSection>

      <div className="mvm mhl">
        <button
          className="btn-submit t4 color-white font-semibold"
          disable={ `${submitting}` }
          type="submit">
          Submit
        </button>
        {error}
      </div>
    </form>
  )
}

CreateCompanyForm.propTypes = {
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'createCompany',
})(CreateCompanyForm)
