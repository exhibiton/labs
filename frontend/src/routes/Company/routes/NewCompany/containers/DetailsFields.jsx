import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import Select from 'react-select'
import Dropzone from 'react-dropzone'

const DetailsFields = ({ categories }) => {
  return (
    <div className="flex-row flex-col-mobile flex-hc">
      <div>
        <div className="flex-col mbs">
          <label className="t3 pbs color-dark-grey font-semibold">Company Name</label>
          <Field
            component="input"
            className="input-field t4"
            name="name"
            placeholder="WeWork"
            type="text" />
        </div>
        <div className="flex-col mbs">
          <label className="t3 pbs color-dark-grey font-semibold">Website URL</label>
          <Field
            component="input"
            className="input-field t4"
            name="website"
            placeholder="www.wework.com"
            type="text" />
        </div>
        <div className="flex-col mbs">
          <label className="t3 pbs color-dark-grey font-semibold">Description</label>
          <Field
            component="textarea"
            className="input-textarea t4"
            name="description"
            placeholder="Greatest company on Earth..."
            type="textarea" />
        </div>
      </div>
      <div className="flex-col mll">
        <div>
          <Dropzone
            multiple={ false }
            onDrop={ (filesToUpload, _e) =>
              change('company.logo', filesToUpload[0]) }
            className="drag-and-drop-container flex-row">
            <div className="drag-and-drop-container__image">
              <Field
                name="logo"
                component={ ({ input }) => {
                  if (input.value) {
                    return <img src={ input.value.preview } alt="Logo preview" />
                  }
                  return <div>Your logo</div>
                } } />
            </div>
            <div className="drag-and-drop-container__info">
              <div className="drag-and-drop-container__info-title">Drag & Drop</div>
              <div className="drag-and-drop-container__info-description">
                to change logo, or <span>browse</span>
              </div>
            </div>
          </Dropzone>
        </div>
        <div>
          <label className="t3 color-dark-grey font-semibold">Categories</label>
          <Field name="categories" multi={true} options={categories} component={props => {
            return (
              <Select
                {...props}
                simpleValue={ true }
                value={props.input.value}
                onChange={value => props.input.onChange(value)} />
            )
          }} />
        </div>
      </div>
    </div>
  )
}

DetailsFields.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DetailsFields
