import React from 'react'

export const FounderListItem = ({ user }) =>
  <div className="flex-row flex-hb founder-list-item mbm">
    <div className="flex-row founder-list-item">
      <div className="avatar mrm">
        <img src={ 'https://cdn.playven.com/defaultimg.png' } />
      </div>
      <div className="flex-col">
        <div className="t4 color-dark-blue font-bold">
          {user.first_name} {user.last_name}
        </div>
        <div className="t4">
          {user.title}
        </div>
      </div>
    </div>
    <div className="item flex-col flex-hc">
      Invite +
    </div>
  </div>

export default FounderListItem
