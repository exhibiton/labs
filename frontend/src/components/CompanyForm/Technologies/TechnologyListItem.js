import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { arrayPush, arrayRemove, formValueSelector } from 'redux-form'
import styled from 'styled-components'

const StyledTechnologyListItem = styled.div.attrs({ className: 'row align-items-center' })`
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

const TechnologyName = styled.div.attrs({ className: 'font-weight-bold' })`
  text-transform: uppercase;
  font-size: .85rem;
  color: #282d3e;
  margin: 0 0 .5rem;
`

const TechnologyDescription = styled.div`
  font-size: .85rem;
  color: #787882;
`

export const TechnologyListItem = ({ arrayPush, arrayRemove, technology, selectedTechnologiesById }) =>
  <StyledTechnologyListItem
    isSelected={ selectedTechnologiesById.includes(technology.id) }
    onClick={ () => {
      if (selectedTechnologiesById.includes(technology.id)) {
        arrayRemove('companyForm', 'tools', selectedTechnologiesById.indexOf(technology.id))
      }
      else {
        arrayPush('companyForm', 'tools', technology.id)
      }
    } }>
    <div className="icon mr-2 pr-2">
      <StyledImg src={ technology.icon } />
    </div>
    <div>
      <TechnologyName>{technology.name}</TechnologyName>
      <TechnologyDescription>Best ever framework</TechnologyDescription>
    </div>
  </StyledTechnologyListItem>

TechnologyListItem.propTypes = {
  selectedTechnologiesById: PropTypes.arrayOf(PropTypes.number),
  technology: PropTypes.object,
  arrayPush: PropTypes.func.isRequired,
  arrayRemove: PropTypes.func.isRequired,
}

const selectCompanyForm = formValueSelector('companyForm')
const mapStateToProps = state => ({
  selectedTechnologiesById: selectCompanyForm(state, 'tools') || [],
})

const mapDispatchToProps = {
  arrayPush,
  arrayRemove,
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyListItem)
