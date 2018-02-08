import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import TechnologyListItem from './TechnologyListItem'

export const TechnologyList = ({ technologies }) => {
  if (!technologies.length) return null

  return (
    <Row className="no-gutters my-5">
      {technologies.map((technology, i) =>
        <TechnologyListItem key={ i } technology={ technology } />
      )}
    </Row>
  )
}

TechnologyList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object),
}

export default TechnologyList
