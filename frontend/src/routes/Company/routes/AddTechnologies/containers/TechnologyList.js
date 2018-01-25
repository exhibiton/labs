import React from 'react'
import TechnologyListItem from './TechnologyListItem'

import './AddTechnologiesStyles.scss'

export const TechnologyList = ({ technologies }) => (
  <div className="">
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
