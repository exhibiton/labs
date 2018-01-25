import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import CompanyCreateTabLinks from '../../../../../components/CompanyCreateTabLinks'
import './AddFoundersStyles.scss'
import { getUsers } from '../../NewCompany/modules/CreateCompanyApi'
import FounderList from './FounderList'

class AddFounders extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const { users } = this.props

    return (
      <div className="">
        <div className="mvl flex-row flex-hc thuge font-bold color-dark-grey">
          <div className="bg-yellow">Create</div>
          <div className="pls">Company</div>
        </div>
        <div className="flex-row flex-hc color-dark-blue">
          <CompanyCreateTabLinks />
        </div>
        <hr className="hr-spacing" />
        <div className="flex-row flex-hc t1 mtl mbs color-dark-grey">
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
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { users } = state.createCompany

  return {
    currentUser,
    users,
  }
}

const mapDispatchToProps = {
  getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFounders)
