import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  height: 3.125rem;
  border: 1px solid gray;
  padding: 0 .5rem;
`

const Input = props =>
  <StyledInput { ...props } { ...props.input } />

Input.propTypes = {
  input: PropTypes.object.isRequired,
}

export default Input
