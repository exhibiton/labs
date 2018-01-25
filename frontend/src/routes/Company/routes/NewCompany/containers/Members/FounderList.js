import React from 'react'
import FounderListItem from './FounderListItem'

export const FounderList = ({ users }) =>
  <div className="flex-col flex-vc">
    {users.map((user, i) =>
      <FounderListItem
        key={ i }
        user={ user } />
    )}
  </div>

export default FounderList
