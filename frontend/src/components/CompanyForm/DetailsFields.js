import React from 'react'
import { connect } from 'react-redux'
import { Field, change } from 'redux-form'
import { show as showModal } from 'redux-modal'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import Input from '../Input'
import Textarea from '../Textarea'
import Select from '../Select'
import CategoryForm from './CategoryForm'
import UploadImage from './UploadImage'

const DetailsFields = ({ categories, change, showModal }) => {
  if (!categories.length) return null

  return (
    <Row className="justify-content-center">
      <Col>
        <div className="mb-3 pb-3">
          <label className="mb-3">Company Name</label>
          <Field
            component={ Input }
            name="name"
            placeholder="WeWork"
            type="text" />
        </div>
        <div className="mb-3 pb-3">
          <label className="mb-3">Website URL</label>
          <Field
            component={ Input }
            name="website"
            placeholder="www.wework.com"
            type="text" />
        </div>
        <div className="mb-3 pb-3">
          <label className="mb-3">Description</label>
          <Field
            component={ Textarea }
            name="description"
            placeholder="Greatest company on Earth..." />
        </div>
      </Col>
      <Col>
        <UploadImage
          name="logo"
          change={ image => change('companyForm', 'logo', image) } />
        <div>
          <label>Categories</label>
          <Field
            name="categories"
            multi={ true }
            options={ categories }
            component={ Select } />
          <div>
            <button
              onClick={ () => showModal('defaultModal', { title: 'Add Categories', content: <CategoryForm /> }) }
              type="button"
              className="btn pl-0">or <span className="font-weight-bold">Add New</span></button>
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
