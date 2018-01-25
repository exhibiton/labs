import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import FounderList from './Members/FounderList'

const AddMembersFields = ({ users }) => {
  if (!users.length) return null
  
  return (
    <div>
      <div className="flex-row flex-hc t1 mbs color-dark-grey">
        Add Founders
      </div>
      <div className="flex-row flex-hc t2 mbm">
        Invite other founders to your company.
      </div>
      <FounderList
        users={ users } />
    </div>
  )
}

AddMembersFields.propTypes = {

}

export default AddMembersFields
