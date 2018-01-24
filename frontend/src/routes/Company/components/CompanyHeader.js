import React from 'react'
import Select from 'react-select'

export const CompanyHeader = props => {
  const { handleSelectChange, value, options } = props

  return (
    <div className="">
      <div className="flex-row flex-wrap flex-hb flex-vb mal phl">
        <h2>Companies</h2>
        <div className="flex-row flex-vc flex-wrap">
          <h4 className="mhm">TECHNOLOGIES:</h4>
          <div className="select-wrapper">
            <Select
              multi={ true }
              closeOnSelect={ false }
              onChange={ handleSelectChange }
              options={ options }
              placeholder="Choose Tags"
              value={ value }
              simpleValue={ true } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyHeader
