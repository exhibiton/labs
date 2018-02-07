import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'
import { createCategory } from '../../../../../api/category-api'
import Input from '../../../../../components/Input'

const StyledButton = styled.button`
  color: #fff;
  font-weight: 600;
  background: #1c1f2b;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: .875rem;
  padding: 1rem 3rem;
  line-height: 1;
  margin: 2rem 0 1rem;
  width: 100%;
`

const CategoryForm = props => {
  const {
    error,
    handleSubmit,
    submitting,
    createCategory,
  } = props

  return (
    <form onSubmit={ handleSubmit(createCategory) }>
      <label htmlFor="category">Category Name</label>
      <Field
        id="category"
        component={Input}
        name="name"
        placeholder="SaaS"
        type="text" />
      
      <div>
        <StyledButton disabled={submitting} type="submit">Add</StyledButton>
        {error}
      </div>
    </form>
  )
}

CategoryForm.propTypes = {
  change: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  createCategory: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  createCategory,
}

const ConnectedCategoryForm = connect(null, mapDispatchToProps)(CategoryForm)

export default reduxForm({
  form: 'categoryForm',
})(ConnectedCategoryForm)