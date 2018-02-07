import React from 'react'
import { connect } from 'react-redux'
import FA from 'react-fontawesome'
import styled from 'styled-components'
import { Row } from 'reactstrap'
import { deselectTechnology } from '../../modules/CreateCompanyActions'

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

export const TechnologyListSelected = ({ selectedTechnologies, deselectTechnology }) => {
  if (!selectedTechnologies.length) return null

  return (
    <Row className="no-gutters mt-2">
      {selectedTechnologies.map(technology =>
        <StyledTechnologySelected key={ technology.id }>
          <StyledImg src={ technology.icon } />
          <div>{technology.name}</div>
          <StyledFA
            onClick={() => deselectTechnology(technology.id)}
            name="remove" />
        </StyledTechnologySelected>

      )}
    </Row>
  )
}

const mapStateToProps = ({ createCompany: { selectedTechnologies } }) => ({
  selectedTechnologies: selectedTechnologies.byId.map(id => selectedTechnologies.byHash[id]),
})

const mapDispatchToProps = {
  deselectTechnology
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyListSelected)