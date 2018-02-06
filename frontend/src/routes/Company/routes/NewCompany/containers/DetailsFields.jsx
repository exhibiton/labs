import React from 'react'
import { connect } from 'react-redux'
import { Field, change } from 'redux-form'
import { show as showModal } from 'redux-modal'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import Dropzone from 'react-dropzone'
import Input from '../../../../../components/Input'
import Textarea from '../../../../../components/Textarea'
import Select from '../../../../../components/Select'
import CategoryForm from './CategoryForm'

const DetailsFields = ({ categories, change, showModal }) => {
  if (!categories.length) return null

  return (
    <Row className="justify-content-center">
      <Col>
        <div className="mb-3 pb-3">
          <label className="mb-3">Company Name</label>
          <Field
            component={Input}
            name="name"
            placeholder="WeWork"
            type="text" />
        </div>
        <div className="mb-3 pb-3">
          <label className="mb-3">Website URL</label>
          <Field
            component={Input}
            name="website"
            placeholder="www.wework.com"
            type="text" />
        </div>
        <div className="mb-3 pb-3">
          <label className="mb-3">Description</label>
          <Field
            component={Textarea}
            name="description"
            placeholder="Greatest company on Earth..." />
        </div>
      </Col>
      <Col>
        <Dropzone
          className="row no-gutters drag-and-drop-container"
          multiple={ false }
          onDrop={ (filesToUpload, _e) =>
            change('companyForm', 'company.logo', filesToUpload[0]) }>
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
        <div>
          <label>Categories</label>
          <Field
            name="categories"
            multi={true}
            options={categories}
            component={Select} />
          <div>
            <button
              onClick={() => showModal('defaultModal', { title: 'Add Categories', content: <CategoryForm /> })}
              type="button"
              className="btn-dark">+ Add category</button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

DetailsFields.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  change: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  change,
  showModal,
}

export default connect(null, mapDispatchToProps)(DetailsFields)
