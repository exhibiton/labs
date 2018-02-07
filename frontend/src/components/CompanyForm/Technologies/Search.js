import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FA from 'react-fontawesome'
import { getTechnologiesByTerm } from '../../../api/technology-api'

const StyledSearch = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  margin: 0;
  padding: 1.1rem 3rem 1rem;
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius: 2px;
`

const StyledFA = styled(FA)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`

export const Search = ({ getTechnologiesByTerm }) =>
  <StyledSearch>
    <StyledFA name="search" />
    <StyledInput
      onChange={ e => getTechnologiesByTerm(e.target.value)}
      placeholder="Search technologies..." />
  </StyledSearch>

const mapDispatchToProps = {
  getTechnologiesByTerm,
}

export default connect(null, mapDispatchToProps)(Search)