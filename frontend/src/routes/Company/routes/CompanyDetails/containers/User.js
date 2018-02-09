import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from 'reactstrap'
import Fa from 'react-fontawesome'

const StyledUserContainer = styled.div`
  max-width: 12.5rem;
`

const StyledAvatar = styled.img`
  max-width: 100%;
`

const StyledFa = styled(Fa)`
  color: #787882;
  font-size: 1.25rem;
`

export const User = ({ first_name, last_name, title, facebook, linkedin, avatar }) => (
  <StyledUserContainer>
    <StyledAvatar className="mb-4" src={ avatar } alt={ `${first_name} avatar` } />
    <div className="mb-2 font-weight-bold">{first_name} {last_name}</div>
    <div className="mb-2 t14 color-grey">{title}</div>
    <Row className="no-gutters justify-content-center">
      {facebook && <a href={ facebook } className="mr-2" target="_blank"><StyledFa name="facebook-square" /></a>}
      {linkedin && <a href={ linkedin } className="mr-2" target="_blank"><StyledFa name="linkedin-square" /></a>}
    </Row>
  </StyledUserContainer>
)
User.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
}

export default User
