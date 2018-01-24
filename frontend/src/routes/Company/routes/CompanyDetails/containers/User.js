import React from 'react'
import PropTypes from 'prop-types'
import './UserStyles.scss'

export const User = ({ first_name, last_name, title, facebook, linkedin, avatar_file_name }) => (
  <div className="user-container">
    <div className="flex-col flex-vc" >
      <img src={ avatar_file_name } className="avatar" alt={ `${first_name} avatar` } />
      <h3 className="t3 color-dark-grey font-bold">{ `${first_name} ${last_name}` }</h3>
      <h3 className="t4">{ `${title}` }</h3>
      <div className="flex-row">
        <a href={ facebook }> Facebook </a>
        <a href={ linkedin }> Linkedin </a>
      </div>
    </div>
  </div>
)
User.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar_file_name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
}

export default User
