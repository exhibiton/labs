import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const TabLinks = ({ tabs }) =>
  <div className="nav-tabs-wrapper">
    <ul className="nav nav-tabs" role="tablist">
      {tabs.map(tabData =>
        <li className="nav-item" key={ tabData.title }>
          <Link to={ tabData.url } className="nav-link" activeClassName="active">
            { tabData.title }
          </Link>
        </li>
      )}
    </ul>
  </div>

TabLinks.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.node.isRequired,
    })),
}

export default TabLinks
