import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 3.125rem;
  border: 1px solid gray;
  padding: .5rem;
  resize: vertical;
`

const Textarea = props =>
  <StyledTextarea {...props} {...props.input} />

export default Textarea
