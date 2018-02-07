import React from 'react'
import { connect } from 'react-redux'
import { FieldArray, formValueSelector } from 'redux-form'
import FA from 'react-fontawesome'
import styled from 'styled-components'
import { Row } from 'reactstrap'

const StyledTechnologySelected = styled.div`
  background: #f8f8f9;
  border-radius: 2px;
  padding: .4rem 1rem .4rem .4rem;
  font-size: .85rem;
  margin: 0 .75rem .75rem 0;
  color: #282d3e;
  flex-direction: row;
  display: flex;
  align-items: center;
`

const StyledFA = styled(FA)`
  margin: 0 0 0 .5rem;
  color: #787882;
  font-size: .75rem;
  cursor: pointer;
`

const StyledImg = styled.img`
  width: 1.25rem;
  max-height: 1.25rem;
  display: block;
  border-radius: .25rem;
  overflow: hidden;
  margin: 0 .5rem 0 0;
`

export const TechnologyListSelected = ({ selectedTechnologies }) => {
  
  const renderArray = ({ fields }) =>
    fields.map((value, index) => {
      const technology = selectedTechnologies[index]

      return (
        <StyledTechnologySelected key={ technology.id }>
          <StyledImg src={ technology.icon } />
          <div>{technology.name}</div>
          <StyledFA
            onClick={() => fields.remove(index)}
            name="remove" />
        </StyledTechnologySelected>
      )
    })

  return (
    <Row className="no-gutters mt-2">
      <FieldArray name="tools" component={renderArray} />
    </Row>
  )
}

const selectCompanyForm = formValueSelector('companyForm')
const mapStateToProps = state => {
  const selectedTechnologiesById = selectCompanyForm(state, 'tools') || []
  const { technologies } = state
  
  return {
    selectedTechnologies: selectedTechnologiesById.map(id => technologies.byHash[id]),
  }
}

export default connect(mapStateToProps)(TechnologyListSelected)
