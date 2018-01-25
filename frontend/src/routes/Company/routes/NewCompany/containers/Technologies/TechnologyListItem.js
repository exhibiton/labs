import React from 'react'

export const TechnologyListItem = ({ technology }) => (
  <div className="flex-row technologies-list mbm">
    <div className="flex-row flex-vc technologies-list-item">
      <div className="icon mrm">
        <img src={ 'https://cdn.playven.com/defaulticon.png' } />
      </div>
      <div className="">
        <div className="t4 color-dark-blue font-bold">
          { technology.name }
        </div>
      </div>
    </div>
  </div>
)

export default TechnologyListItem
