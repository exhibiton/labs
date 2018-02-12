import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router'

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin:auto;
  max-width: 100%;
  max-height: 100%;
`

const StyledInfo = styled.div.attrs({
  className: 'd-flex flex-column no-gutters align-items-center justify-content-between p-3',
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background: #3e42b1;
  color: #fff;
  text-align: center;
  transition: opacity .15s ease-in-out;
  will-change: opacity;
`

const StyledCardContainer = styled.div`
  position: relative;
  padding: 0 0 100%;
  background: #fff;
  overflow: hidden;
  
  &:hover {
    img {
      filter: blur(.5rem);
    }
    
    ${StyledInfo} {
      opacity: .75;
    }
  }
`

const StyledLink = styled(Link)`
  background: #fff;
  padding: .5rem 1rem;
  border-radius: .2rem;
  color: #2a2c41;
  text-decoration: none!important;
`

export const Card = ({ name, description, logo, id }) => (
  <StyledCardContainer>
    <StyledImg src={ logo } alt={ `${name} Logo` } />
    <StyledInfo>
      <h3>{name}</h3>
      <div>{description}</div>
      <StyledLink to={ `/company/${id}/` }>Details</StyledLink>
    </StyledInfo>
  </StyledCardContainer>
)
Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  logo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Card
