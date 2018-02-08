import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 3rem;
  max-height: 3rem;
`

export const Tool = ({ name, icon }) => (
  <Row className="no-gutters align-items-center mb-4">
    <StyledImg src={ icon } className="tool-icon" alt={ `${name} icon` } />
    <div className="ml-3 t14">
      <div className="font-weight-bold text-uppercase">{name}</div>
      <div className="mt-1 color-grey">Language</div>
    </div>
  </Row>
)
Tool.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Tool
