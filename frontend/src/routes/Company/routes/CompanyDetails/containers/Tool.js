import React from 'react'
import PropTypes from 'prop-types'
import './ToolStyle.scss'

export const Tool = ({ name, icon }) => (
  <div className="tool-container">
    <div className="flex-row flex-vc" >
      <img src={ icon } className="tool-icon" alt={ `${name} icon` } />
      <h4 className="t4 color-dark-grey font-bold">{ name }</h4>
    </div>
  </div>
)
Tool.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Tool
