import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'
import { Container, Row, Col } from 'reactstrap'
import Card from './Card'

const Background = styled.div`
  background: #f8f8f9;
`

export const CardList = ({ companies }) => {
  if (!companies.length) return null

  return (
    <Background>
      <Container className="py-4">
        {_.chunk(companies, 5).map((chunkCompanies, i) => (
          <Row key={ i }>
            {_.times(5, index => {
              if (chunkCompanies[index]) {
                const company = chunkCompanies[index]

                return (
                  <Col key={ index }>
                    <Card
                      name={ company.name }
                      logo={ company.logo }
                      id={ company.id } />
                  </Col>
                )
              }

              return <Col key={ index } />
            })}
          </Row>
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
