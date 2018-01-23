import React from 'react'
import TabLinks from './TabLinks'

const CompanyCreateTabLinks = () => {
  const tabs = [{
    title: 'GENERAL INFO',
    url: '/company/new',
  }, {
    title: 'ADD FOUNDERS',
    url: '/company/new/founders',
  }, {
    title: 'SELECT TECHNOLOGIES',
    url: '/company/new/technologies',
  }]

  return <TabLinks tabs={ tabs } />
}

export default CompanyCreateTabLinks
