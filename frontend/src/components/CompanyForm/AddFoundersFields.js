import React from 'react'
import PropTypes from 'prop-types'
import { Title, SubTitle } from './StyledComponents/TabContent'
import UserList from './Users/UserList'
import Search from './Users/Search'

const AddFoundersFields = ({ users }) => {
  return (
    <div>
      <Title>Add Founders</Title>
      <SubTitle>Invite other founders to your company.</SubTitle>
      <Search />
      <UserList users={ users } />
    </div>
  )
}

AddFoundersFields.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
}

export default AddFoundersFields
