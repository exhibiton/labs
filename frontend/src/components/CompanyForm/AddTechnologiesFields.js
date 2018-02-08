import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { show as showModal } from 'redux-modal'
import { SubTitle } from './StyledComponents/TabContent'
import TechnologyList from './Technologies/TechnologyList'
import TechnologyListSelected from './Technologies/TechnologyListSelected'
import Search from './Technologies/Search'
import TechnologyForm from './TechnologyForm'

const AddTechnologiesFields = ({ technologies, showModal }) =>
  <div>
    <SubTitle>Select technologies and tools your company uses or{' '}
      <span
        onClick={ () => showModal('defaultModal', { title: 'Add Technology', content: <TechnologyForm /> }) }
        className="color-dark font-weight-bold">Add New</span>
    </SubTitle>
    <Search />
    <TechnologyListSelected technologies={ technologies } />
    <TechnologyList technologies={ technologies } />
  </div>

AddTechnologiesFields.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object),
  showModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  showModal,
}

export default connect(null, mapDispatchToProps)(AddTechnologiesFields)
