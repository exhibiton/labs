import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink } from 'react-router'
import './CardStyle.scss'

export const Card = ({ name, description, logo, id }) => (
  <div className="card-container">
    <div className="flipper">
      <div className="front">
        <img className="card-logo" src={ logo } alt={ `${name} Logo` } />
      </div>
      <div className="back flex-col pas flex-vc color-bg-black">
        <h2 className="text-center color-white mbt">{name}</h2>
        <p className="text-center color-white mbt">{description}</p>
        <IndexLink
          to={ `/company/${id}` }
          className="color-white color-bdh-white color-bdv-white pht"
          activeClassName="active">
          Learn More
        </IndexLink>


      </div>
    </div>
  </div>
)
Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Card
