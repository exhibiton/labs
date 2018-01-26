import React from 'react'
import PropTypes from 'prop-types'
import UserListItem from './UserListItem'

export const UserList = ({ users }) => {
  if (!users.length) return null
  
  return (
    <div>
      {users.map((user, i) =>
        <UserListItem key={ i } user={ user } />
      )}
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
}

export default UserList
