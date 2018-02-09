import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = props =>
  <input { ...props } { ...props.input } />

Input.propTypes = {
  input: PropTypes.object.isRequired,
}

const StyledInput = styled(Input)`
  width: 100%;
  height: 3.125rem;
  border: 1px solid gray;
  padding: 0 .5rem;
`

export const InputLight = StyledInput.extend`
  border: 1px solid #eaeaea;
`

export default StyledInput
