import React from 'react'
import Card from './Card';

export const CardList = props => {
  const {companies} = props;
  return(
    <div className="card-list color-bg-grey-200">
      <div className='flex-row flex-wrap flex-hc mal pal'>
      {
        companies.map((company, i) =>
          <Card
            name="Tesla"
            logo="https://simpleicons.org/icons/tesla.svg"
            description="makes electric cars"
            key={i}
          />
        )
      }
      </div>
    </div>
    )
  }

export default CardList
