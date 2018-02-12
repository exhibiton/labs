import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getCompanies, getCompaniesByTechnologies } from '../modules/companies'
import { getTechnologies } from '../../../api/technology-api'
import CompanyHeader from './CompanyHeader'
import CardList from './CardList'

class CompanyView extends React.Component {
  static propTypes = {
    getCompanies: PropTypes.func.isRequired,
    getTechnologies: PropTypes.func.isRequired,
    getCompaniesByTechnologies: PropTypes.func.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })),
    companies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })).isRequired,
    selectedTagIdList: PropTypes.arrayOf(PropTypes.number),
  }

  componentDidMount() {
    this.props.getCompanies()
    this.props.getTechnologies()
  }

  componentDidUpdate(prevProps) {
    const {
      getCompanies,
      getCompaniesByTechnologies,
      selectedTagIdList,
    } = this.props

    if (!_.isEqual(selectedTagIdList, prevProps.selectedTagIdList) && selectedTagIdList.length > 0) {
      getCompaniesByTechnologies(selectedTagIdList)
    }

    if (!_.isEqual(selectedTagIdList, prevProps.selectedTagIdList) && !selectedTagIdList.length) {
      getCompanies()
    }
  }

  render() {
    return (
      <div>
        <CompanyHeader
          options={ this.props.technologies } />
        <CardList companies={ this.props.companies } />
      </div>
    )
  }
}

const mapStateToProps = ({ companies, technologies }) => ({
  companies: companies.byId.map(id => companies.byHash[id]),
  technologies: technologies.byId.map(id => ({ label: technologies.byHash[id].name, value: id })),
  selectedTagIdList: companies.selectedTagIdList,
})

const mapDispatchToProps = {
  getCompanies,
  getTechnologies,
  getCompaniesByTechnologies,
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyView)
