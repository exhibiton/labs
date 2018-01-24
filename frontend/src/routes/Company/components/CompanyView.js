import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCompanies } from '../modules/companies'
import CompanyHeader from './CompanyHeader';
import CardList from './CardList';

class CompanyView extends React.Component {
  static propTypes = {
    getCompanies: PropTypes.func.isRequired,
    companies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })).isRequired,
  }

  state = {
    value: [],

  }
  componentDidMount() {
    this.props.getCompanies()
  }

  handleSelectChange = value => {
    this.setState({ value })
    // TODO: create function to filter list of companies
  }

  render() {
    return (
      <div>
        <CompanyHeader
          value={ this.state.value }
          handleSelectChange={ value => this.handleSelectChange(value) }
          options={ [
            { label: 'Chocolate', value: 'chocolate' },
            { label: 'Vanilla', value: 'vanilla' },
            { label: 'Strawberry', value: 'strawberry' },
            { label: 'Caramel', value: 'caramel' },
            { label: 'Cookies and Cream', value: 'cookiescream' },
            { label: 'Peppermint', value: 'peppermint' },
          ] } />
        <CardList
          companies={ this.props.companies } />
      </div>
    )
  }
}

const mapStateToProps = state => ({ companies: state.companies });

const mapDispatchToProps = {
  getCompanies,
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyView)
