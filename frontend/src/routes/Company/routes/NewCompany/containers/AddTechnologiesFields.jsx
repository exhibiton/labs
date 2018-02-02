import React from 'react'
import PropTypes from 'prop-types'
import { SubTitle } from './StyledComponents/TabContent'
import TechnologyList from './Technologies/TechnologyList'
import TechnologyListSelected from './Technologies/TechnologyListSelected'
import Search from './Technologies/Search'

const AddTechnologiesFields = ({ technologies }) =>
  <div>
    <SubTitle>Select technologies and tools your company uses</SubTitle>
    <Search />
    <TechnologyListSelected technologies={technologies} />
    <TechnologyList technologies={ technologies } />
  </div>

AddTechnologiesFields.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object),
}

export default AddTechnologiesFields