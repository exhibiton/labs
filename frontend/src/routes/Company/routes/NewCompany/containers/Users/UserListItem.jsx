import React from 'react'
import { connect } from 'react-redux'
import FA from 'react-fontawesome'
import styled from 'styled-components'
import { selectUser, deselectUser } from '../../modules/CreateCompanyActions'

const StyledUserListItem = styled.div`
  width: 100%;
`

const StyledFA = styled(FA)`
  margin: 0 0 0 .25rem;
`

const StyledInvite = styled.button.attrs({ type: 'button' })`
  align-self: center;
  white-space: nowrap;
  text-transform: uppercase;
  color:#787882;

  &:hover {
    color: #000;
  }
`

const StyledSelected = StyledInvite.extend`
  color: #000;
`

const StyledImg = styled.img`
  width: 4.25rem;
  max-height: 4.25rem;
  display: block;
`

export const UserListItem = ({ user, selectUser, deselectUser, selectedUsersById }) =>
  <StyledUserListItem className="flex-row flex-hb mbm">
    <div className="flex-row">
      <div className="avatar mrm">
        <StyledImg src={ 'https://cdn.playven.com/defaultimg.png' } />
      </div>
      <div>
        <div className="t4 color-dark-blue font-bold">
          {user.first_name} {user.last_name}
        </div>
        <div className="t4">
          {user.title}
        </div>
      </div>
    </div>
    {selectedUsersById.includes(user.id) ?
      <StyledSelected
        isSelected={selectedUsersById.includes(user.id)}
        onClick={() => deselectUser(user.id)}>
        Selected <StyledFA name="check-circle" />
      </StyledSelected>
      :
      <StyledInvite
        isSelected={selectedUsersById.includes(user.id)}
        onClick={() => selectUser(user.id, user)}>
        Invite <StyledFA name="plus-circle" />
      </StyledInvite>}
  </StyledUserListItem>

const mapStateToProps = ({ createCompany }) => ({
  selectedUsersById: createCompany.selectedUsers.byId
})

const mapDispatchToProps = {
  selectUser,
  deselectUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem)
