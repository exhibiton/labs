import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 3.125rem;
  border: 1px solid gray;
  padding: .5rem;
  resize: vertical;
`

const Textarea = props =>
  <StyledTextarea { ...props } { ...props.input } />

Textarea.propTypes = {
  input: PropTypes.object.isRequired,
}

export default Textarea
