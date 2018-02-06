import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  height: 3.125rem;
  border: 1px solid gray;
  padding: 0 .5rem;
`

const Input = props =>
  <StyledInput {...props} {...props.input} />

export default Input

