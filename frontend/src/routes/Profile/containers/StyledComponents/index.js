import styled from 'styled-components'

export const ProfileImgHolder = styled.div`
  position: relative;
  max-width: 12.5rem;
  height: 12.5rem;
  margin: auto;

  .fa {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    border-radius: 50%;
    transform: translate(25%, 25%);
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`
