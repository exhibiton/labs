import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import classnames from 'classnames'

const CategoryList = ({ className, categories }) => (
  <Row className={ classnames('justify-content-center', className) }>
    {categories.map((category, i) =>
      <div key={ i } className="mr-4 font-weight-bold">- {category.name}</div>
    )}
  </Row>
)

CategoryList.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
}

export default CategoryList
