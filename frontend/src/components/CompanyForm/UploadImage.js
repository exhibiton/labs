import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

const StyledDropzone = styled(Dropzone)`
  background: #f8f8f9;
  padding: 3rem 2rem;
  font-size: .85rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #000;
`

const StyledImgContainer = styled.div`
  width: 6rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #afafb4;
  font-size: .5rem;
  
  img {
    max-width: 100%;
    max-height: 5.625rem;
  }
`

const StyledInfo = styled.div`
  border: 1px dashed #efefef;
  border-left: 0;
  background: #fff;
  padding: 1.5rem 1rem;
  flex: 1;
`

const UploadImage = ({ name, change }) =>
  <StyledDropzone
    className="row no-gutters"
    multiple={ false }
    onDrop={ filesToUpload => change(filesToUpload[0]) }>
    <StyledImgContainer>
      <Field
        name={ name }
        component={ ({ input }) => {
          if (input.value) {
            return <img src={ input.value.preview || input.value } alt="Logo preview" />
          }
          return <div>Your logo</div>
        } } />
    </StyledImgContainer>
    <StyledInfo>
      <div className="mb-2 font-weight-bold">Drag & Drop</div>
      <div className="color-grey">
        to change logo, or <span className="text-underline">browse</span>
      </div>
    </StyledInfo>
  </StyledDropzone>

UploadImage.propTypes = {
  name: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
}

export default UploadImage
