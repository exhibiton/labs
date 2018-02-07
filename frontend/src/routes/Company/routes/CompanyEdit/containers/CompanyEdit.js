import React from 'react'
import PropTypes from 'prop-types'
import CompanyForm from '../../../../../components/CompanyForm'

const CompanyDetails = ({ params }) =>
  <CompanyForm id={params.id} />

CompanyDetails.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
}

export default CompanyDetails
