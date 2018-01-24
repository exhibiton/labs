import React from 'react'
import PropTypes from 'prop-types'
import Tool from './Tool';

export const ToolList = ({ tools }) => (
  <div className="mvl">
    <h2 className="t2 color-dark-grey font-bold mvm"> Technologies </h2>
    <div className="flex-row flex-wrap flex-hc">
      {
        tools.map((tool, i) =>
          <Tool
            name={ tool.name }
            icon={ tool.icon }
            key={ i } />
        )
      }
    </div>
  </div>
)

ToolList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
}

export default ToolList
