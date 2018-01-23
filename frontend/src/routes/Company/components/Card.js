import React from 'react'
import PropTypes from 'prop-types'
import './CardStyle.scss'

export const Card = properties => {
  const { name, description, logo } = properties;

  return (
    <div className="card-container">
      <div className="flipper">
        <div className="front">
          <img className="card-logo" src={ logo } alt={ `${name} Logo` } />
        </div>
        <div className="back flex-col pas flex-vc color-bg-black">
          <h2 className="text-center color-white mbt">{name}</h2>
          <p className="text-center color-white mbt">{description}</p>
          <button className="color-white color-bdh-white color-bdv-white pht">Learn More</button>
        </div>
      </div>
    </div>
  )
}
Card.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
}

export default Card
