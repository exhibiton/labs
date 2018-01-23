import React from 'react'
import './CardStyle.scss'

export const Card = props => {
  const {name, description, logo} = props;
  return(
    <div className="card-container">
      <div className="flipper">
       <div className="front">
          <img className='card-logo' src={logo} alt={`${name} Logo`}/>
        </div>
        <div className="back flex-col pas flex-vc color-bg-black">
          <h2 className="text-center color-white mbt">{name}</h2>
          <p className="text-center color-white mbt">{description}</p>
          <button className='color-white color-bdh-white color-bdv-white pht'>Learn More</button>
        </div>
      </div>
    </div>
    )
  }

export default Card
