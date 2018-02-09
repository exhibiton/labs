import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import classnames from 'classnames'
import Tool from './Tool'

export const ToolList = ({ tools, className }) => (
  <div className={ classnames('text-left', className) }>
    <h3 className="pb-3 mb-3 font-weight-bold">Technologies</h3>
    <Row>
      {tools.map((tool, i) =>
        <Col xs={ 4 } key={ i }>
          <Tool
            name={ tool.name }
            icon={ tool.icon } />
        </Col>
      )}
    </Row>
  </div>
)

ToolList.propTypes = {
  className: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
}

export default ToolList
