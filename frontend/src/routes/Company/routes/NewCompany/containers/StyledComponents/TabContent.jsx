import styled from 'styled-components'

export const Title = styled.div`
  color: #2a2c41;
  margin: 0 0 1rem;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
`

export const SubTitle = styled.div`
  color: #787882;
  margin: 0 0 2rem;
  font-size: 1rem;
  text-align: center;
`

export const ContentHolder = styled.div`
  margin: 3rem auto 2rem;
  border-bottom-color: ${props => props.active ? '#1c1f2b' : 'white'}!important;
  max-width: ${props => props.wide ? '50rem' : '35rem'};
`