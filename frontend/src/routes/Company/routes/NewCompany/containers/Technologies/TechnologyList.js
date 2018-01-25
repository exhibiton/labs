import React from 'react'
import TechnologyListItem from './TechnologyListItem'

export const TechnologyList = ({ technologies }) => (
  <div>
    <div className="flex-row flex-wrap">
      {technologies.map((technology, i) =>
        <TechnologyListItem
          key={ i }
          technology={ technology } />
      )}
    </div>
  </div>
)

export default TechnologyList
