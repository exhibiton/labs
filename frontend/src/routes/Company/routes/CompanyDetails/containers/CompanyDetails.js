import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getCompany } from '../../../../../api/company-api'
import UserList from './UserList'
import ToolList from './ToolList'

class CompanyDetails extends React.Component {
  componentDidMount() {
    this.props.getCompany(this.props.params.id)
  }

  render() {
    const company = this.props.company

    if (_.isEmpty(company)) return null
    
    return (
      <div className="">
        <div className="mhxxl phxxl  flex-row flex-hc">
          <div className="mvl flex-col flex-vc ">
            <div className="logo flex-row flex-hc">
              <img src={ company.logo } />
            </div>
            <div className="t1 font-bold color-dark-grey">{ company.name }</div>
            <div className="t3  color-dark-grey">{ company.description }</div>
            <UserList users={ company.users } />
            <ToolList tools={ company.tools } />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ company })  => ({
  company: company.data
})

const mapDispatchToProps = {
  getCompany,
}

CompanyDetails.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  params: PropTypes.objectOf(PropTypes.string),
  getCompany: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)
