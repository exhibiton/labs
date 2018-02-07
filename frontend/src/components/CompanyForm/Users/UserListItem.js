import React from 'react'
import { connect } from 'react-redux'
import { arrayPush, arrayRemove, formValueSelector } from 'redux-form'
import FA from 'react-fontawesome'
import styled from 'styled-components'
import { Row } from 'reactstrap'

const StyledUserListItem = styled(Row)
  .attrs({ className: 'no-gutters justify-content-between mb-5' })`
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
  background: none;
  border: 0;
  cursor: pointer;

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

export const UserListItem = ({ user, arrayPush, arrayRemove, selectedUsersById }) =>
  <StyledUserListItem>
    <Row className="no-gutters align-items-center">
      <div className="mr-3 pr-3">
        <StyledImg src={ 'https://cdn.playven.com/defaultimg.png' } />
      </div>
      <div>
        <div>
          {user.first_name} {user.last_name}
        </div>
        <div className="color-grey t14 mt-2">
          {user.title}
        </div>
      </div>
    </Row>
    {selectedUsersById.includes(user.id) ?
      <StyledSelected
        isSelected={selectedUsersById.includes(user.id)}
        onClick={() => arrayRemove('companyForm', 'users', selectedUsersById.indexOf(user.id))}>
        Selected <StyledFA name="check-circle" />
      </StyledSelected>
      :
      <StyledInvite
        isSelected={selectedUsersById.includes(user.id)}
        onClick={() => arrayPush('companyForm', 'users', user.id)}>
        Invite <StyledFA name="plus-circle" />
      </StyledInvite>}
  </StyledUserListItem>

const selectCompanyForm = formValueSelector('companyForm')
const mapStateToProps = state => ({
  selectedUsersById: selectCompanyForm(state, 'users') || []
})

const mapDispatchToProps = {
  arrayPush,
  arrayRemove,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem)
