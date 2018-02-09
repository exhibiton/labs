import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCompanies } from '../modules/companies'
import CompanyHeader from './CompanyHeader'
import CardList from './CardList'

class CompanyView extends React.Component {
  static propTypes = {
    getCompanies: PropTypes.func.isRequired,
    companies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })).isRequired,
  }

  componentDidMount() {
    this.props.getCompanies()
  }

  render() {
    return (
      <div>
        <CompanyHeader
          options={ [
            { label: 'Chocolate', value: 'chocolate' },
            { label: 'Vanilla', value: 'vanilla' },
            { label: 'Strawberry', value: 'strawberry' },
            { label: 'Caramel', value: 'caramel' },
            { label: 'Cookies and Cream', value: 'cookiescream' },
            { label: 'Peppermint', value: 'peppermint' },
          ] } />
        <CardList companies={ this.props.companies } />
      </div>
    )
  }
}

const mapStateToProps = ({ companies }) => ({
  companies: companies.byId.map(id => companies.byHash[id]),
})

const mapDispatchToProps = {
  getCompanies,
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyView)
