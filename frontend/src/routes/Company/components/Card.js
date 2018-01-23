import React from 'react'
import './CardStyle.scss'

export const Card = props => {
  const {name, description, logo} = props;
  return(
    <div className="card-container">
      <div className="flipper">
       <div className="front">
          <img src={logo} alt={`${name} Logo`}/>
        </div>
        <div className="back">
          {name}
          {description}
        </div>
      </div>
    </div>
    )
  }

export default Card
