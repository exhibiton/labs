import React from 'react'
import propTypes from 'prop-types'

export const PageLayout = ({ children }) => (
  <div className="children">
    {children}
  </div>
)

PageLayout.propTypes = {
  children: propTypes.node,
}

export default PageLayout
