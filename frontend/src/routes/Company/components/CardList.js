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
            name={company.name}
            logo={company.logo}
            description={company.description}
            id={company.id}
            key={i}
          />
        )
      }
      </div>
    </div>
    )
  }

export default CardList
