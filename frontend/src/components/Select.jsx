import React from 'react'
import ReactSelect from 'react-select'

const Select = props =>
  <ReactSelect
    {...props}
    value={props.input.value}
    onBlur={() => props.input.onBlur(props.input.value)}
    onChange={event => {
      let result
      
      if (event) result = props.multi ? event.map(x => x.value) : event.value
      else result = null
      
      return props.input.onChange(result)
    }} />

export default Select
