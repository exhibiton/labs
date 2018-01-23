import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {getCompanies} from '../modules/companies'
import CompanyHeader from './CompanyHeader';
import CardList from './CardList';

class CompanyView extends React.Component {
  static propTypes = {
    getCompanies: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.getCompanies()
  }

  render() {
    const companies = this.props.companies.companies ? this.props.companies.companies : []
    return(
      <div>
        <CompanyHeader
          value={[]}
          handleSelectChange={(value)=>console.log('You\'ve selected:', value)}
          options={[
            { label: 'Chocolate', value: 'chocolate' },
            { label: 'Vanilla', value: 'vanilla' },
            { label: 'Strawberry', value: 'strawberry' },
            { label: 'Caramel', value: 'caramel' },
            { label: 'Cookies and Cream', value: 'cookiescream' },
            { label: 'Peppermint', value: 'peppermint' },
          ]}

        />
        <CardList
          companies={companies}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { companies: state.companies };
};

const mapDispatchToProps = {
  getCompanies,
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyView)
