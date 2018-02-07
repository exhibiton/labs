import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FA from 'react-fontawesome'
import { getUsersByTerm } from '../../../api/user-api'

const StyledSearch = styled.div`
  position: relative;
  margin: 0 0 2.5rem;
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

export const Search = ({ getUsersByTerm }) =>
  <StyledSearch>
    <StyledFA name="search" />
    <StyledInput
      onChange={ e => getUsersByTerm(e.target.value)}
      placeholder="Search by name or email" />
  </StyledSearch>

const mapDispatchToProps = {
  getUsersByTerm,
}

export default connect(null, mapDispatchToProps)(Search)