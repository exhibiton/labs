import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import CompanyCreateTabLinks from '../../../../../components/CompanyCreateTabLinks'
import './AddTechnologiesStyles.scss'
import { getTechnologies } from '../../NewCompany/modules/CreateCompanyApi'
import TechnologyList from './TechnologyList'

class AddTechnologies extends React.Component {
  componentDidMount() {
    this.props.getTechnologies()
  }
  render() {
    const { technologies } = this.props

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
        <div className="flex-row flex-hc t3 mtl mbm">
          Select technologies and tools your company uses
        </div>
        <div className="">
          <TechnologyList technologies={ technologies } />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  const { technologies } = state.createCompany

  return {
    currentUser,
    technologies,
  }
}

const mapDispatchToProps = {
  getTechnologies,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnologies)
