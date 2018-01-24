import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export const CardList = ({ companies }) => {
  return (
    <div className="card-list color-bg-grey-200">
      <div className="flex-row flex-wrap flex-hc mal pal">
        {companies.map((company, i) =>
          <Card
            name={ company.name }
            logo={ company.logo }
            description={ company.description }
            id={ company.id }
            key={ i } />
        )}
      </div>
    </div>
  )
}

CardList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  })).isRequired,
}

export default CardList
