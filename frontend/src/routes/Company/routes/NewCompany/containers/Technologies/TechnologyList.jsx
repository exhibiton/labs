import React from 'react'
import TechnologyListItem from './TechnologyListItem'

export const TechnologyList = ({ technologies }) => {
  if (!technologies.length) return null

  return (
    <div className="flex-row flex-wrap mtm pts">
      {technologies.map((technology, i) =>
        <TechnologyListItem key={ i } technology={ technology } />
      )}
    </div>
  )
}

export default TechnologyList
