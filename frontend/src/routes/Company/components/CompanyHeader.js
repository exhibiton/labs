import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import { selectTagIdList } from '../modules/companies'

const StyledSelect = styled(Select)`
  width: 100%;
  max-width: 18rem;
`

export const CompanyHeader = ({ options, selectTagIdList, selectedTagIdList }) =>
  <Container>
    <Row className="pb-3 pt-5 mx-0 justify-content-between align-items-center">
      <h2 className="w-25">Companies</h2>
      <Row className="no-gutters w-75 align-items-center justify-content-end">
        <h6 className="mb-0 mr-3">TECHNOLOGIES:</h6>
        <StyledSelect
          multi={ true }
          closeOnSelect={ false }
          onChange={ event => {
            let result = []

            if (event) result = event.map(x => x.value)
            else result = []

            return selectTagIdList(result)
          } }
          options={ options }
          value={ selectedTagIdList }
          placeholder="Choose Tags" />
      </Row>
    </Row>
  </Container>

CompanyHeader.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectTagIdList: PropTypes.func.isRequired,
  selectedTagIdList: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = ({ companies }) => ({
  selectedTagIdList: companies.selectedTagIdList,
})

const mapDispatchToProps = {
  selectTagIdList,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyHeader)
