import React from 'react'
import PropTypes from 'prop-types'
import User from './User';

export const UserList = ({ users }) => (
  <div className="mvl">
    <div className="flex-row flex-wrap flex-hc">
      {
        users.map((user, i) =>
          <User
            first_name={ user.first_name }
            last_name={ user.last_name }
            title={ user.title }
            facebook={ user.facebook }
            linkedin={ user.linkedin }
            avatar_file_name={ user.avatar_file_name }
            key={ i } />
        )
      }
    </div>
  </div>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    avatar_file_name: PropTypes.string.isRequired,
  })).isRequired,
}

export default UserList
