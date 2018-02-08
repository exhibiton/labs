import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Card from './Card'

const Background = styled.div`
  background: #f8f8f9;
`

export const CardList = ({ companies }) =>
  <Background>
    <Container className="py-4">
      <Row>
        {companies.map((company, i) =>
          <Col className="col-3" key={ i }>
            <Card
              name={ company.name }
              logo={ company.logo }
              description={ company.description }
              id={ company.id } />
          </Col>
        )}
      </Row>
    </Container>
  </Background>

CardList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  })).isRequired,
}

export default CardList
