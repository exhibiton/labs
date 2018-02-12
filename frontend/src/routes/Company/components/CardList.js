import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'
import { Container, Row, Col } from 'reactstrap'
import Card from './Card'

const Background = styled.div`
  background: #f8f8f9;
`

const StyledRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
`

const StyledCol = styled(Col)`
  padding: 5px;
`

export const CardList = ({ companies }) => {
  if (!companies.length) return null

  return (
    <Background>
      <Container className="py-4">
        {_.chunk(companies, 5).map((chunkCompanies, i) => (
          <StyledRow key={ i }>
            {_.times(5, index => {
              if (chunkCompanies[index]) {
                const company = chunkCompanies[index]

                return (
                  <StyledCol key={ index }>
                    <Card
                      name={ company.name }
                      logo={ company.logo }
                      id={ company.id } />
                  </StyledCol>
                )
              }

              return <StyledCol key={ index } />
            })}
          </StyledRow>
        ))}
      </Container>
    </Background>
  )
}

CardList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  })).isRequired,
}

export default CardList
