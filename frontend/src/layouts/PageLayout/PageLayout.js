import React from 'react'
import propTypes from 'prop-types'
import Header from '../../components/Header'

export const CoreLayout = ({ children }) => (
  <div className="children">
    <Header />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: propTypes.node,
}

export default CoreLayout
