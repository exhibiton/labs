import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import Styled from 'styled-components'
import TechnologyList from './Technologies/TechnologyList'

const StyledWrapper = Styled.div`
  max-width: 35rem;
`

const AddTechnologiesFields = ({ technologies }) => {
  if (!technologies.length) return null
  
  return (
    <StyledWrapper>
      <div className="text-center t3 mbm">
        Select technologies and tools your company uses
      </div>
      <div>
        <TechnologyList technologies={ technologies } />
      </div>
    </StyledWrapper>
  )
}

AddTechnologiesFields.propTypes = {

}

export default AddTechnologiesFields
