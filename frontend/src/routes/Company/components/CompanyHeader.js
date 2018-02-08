import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'

const StyledSelect = styled(Select)`
  width: 100%;
  max-width: 18rem;
`

export const CompanyHeader = props => {
  const { handleSelectChange, value, options } = props

  return (
    <Container>
      <Row className="pb-3 pt-5 mx-0 justify-content-between align-items-center">
        <h2 className="w-25">Companies</h2>
        <Row className="no-gutters w-75 align-items-center justify-content-end">
          <h6 className="mb-0 mr-3">TECHNOLOGIES:</h6>
          <StyledSelect
            multi={ true }
            closeOnSelect={ false }
            onChange={ handleSelectChange }
            options={ options }
            placeholder="Choose Tags"
            value={ value }
            simpleValue={ true } />
        </Row>
      </Row>
    </Container>
  )
}

CompanyHeader.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
}

export default CompanyHeader
