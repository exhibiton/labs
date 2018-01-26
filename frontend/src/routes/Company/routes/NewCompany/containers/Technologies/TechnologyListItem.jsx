import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { selectTechnology, deselectTechnology } from '../../modules/CreateCompanyActions'

const StyledTechnologyListItem = styled.div`
  width: 50%;
  margin: 0 0 1.25rem;
  opacity: ${props => props.isSelected ? '.5' : '1'};
  cursor: pointer;
`

const StyledImg = styled.img`
  width: 4.25rem;
  max-height: 4.25rem;
  display: block;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(40, 45, 62, 0.25);
`

const TechnologyName = styled.div`
  text-transform: uppercase;
  font-size: .85rem;
  color: #282d3e;
  margin: 0 0 .5rem;
`

const TechnologyDescription = styled.div`
  font-size: .85rem;
  color: #787882;
`

export const TechnologyListItem = ({ technology, selectedTechnologiesById, selectTechnology, deselectTechnology }) =>
  <StyledTechnologyListItem
    isSelected={selectedTechnologiesById.includes(technology.id)}
    onClick={() => {
    if (selectedTechnologiesById.includes(technology.id)) {
      deselectTechnology(technology.id)
    } else {
      selectTechnology(technology.id, technology)
    }
  }}>
    <div className="flex-row flex-vc">
      <div className="icon mrm">
        <StyledImg src={ 'https://cdn.playven.com/defaulticon.png' } />
      </div>
      <div>
        <TechnologyName>{technology.name}</TechnologyName>
        <TechnologyDescription>Best ever framework</TechnologyDescription>
      </div>
    </div>
  </StyledTechnologyListItem>

const mapStateToProps = ({ createCompany }) => ({
  selectedTechnologiesById: createCompany.selectedTechnologies.byId
})

const mapDispatchToProps = {
  selectTechnology,
  deselectTechnology
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyListItem)
