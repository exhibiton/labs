import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import CompanyCreateTabLinks from '../../../../../components/CompanyCreateTabLinks'
import './AddTechnologiesStyles.scss'

class AddTechnologies extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="">
        <div className="mvxxl flex-row flex-hc thuge font-bold color-dark-grey">
          <div className="bg-yellow">Create</div>
          <div className="pls">Company</div>
        </div>
        <div className="flex-row flex-hc color-dark-blue">
          <CompanyCreateTabLinks />
        </div>
        <hr className="hr-spacing" />
        <div className="flex-row flex-hc t1 mvxl">
          Add Technologies yay
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth

  return {
    currentUser,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnologies)
