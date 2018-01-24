import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCompany } from '../modules/GetCompanyApi'
import UserList from './UserList'
import ToolList from './ToolList'


class CompanyDetails extends React.Component {
  componentDidMount() {
    this.props.getCompany(this.props.params.id)
  }
  render() {
    const company = this.props.companyDetails.company

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

const mapStateToProps = state => (
  { companyDetails: state.companyDetails }
)

const mapDispatchToProps = {
  getCompany,
}

CompanyDetails.propTypes = {
  companyDetails: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  })).isRequired,
  params: PropTypes.objectOf(PropTypes.string),
  getCompany: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)
