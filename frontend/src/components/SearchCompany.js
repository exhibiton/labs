import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Fa from 'react-fontawesome'
import Highlight from 'react-highlight-words'
import onClickOutside from 'react-onclickoutside'
import { getCompanyListByTerm } from '../api/company-api'

const StyledSearchCompany = styled.div`
  position: relative;
  margin: 0 0 0 2rem;
`

const StyledInputWrapper = styled.div`
  border: 1px solid ${props => props.isFocused ? '#1c1f2b' : '#eaeaea'};  

  .fa {
    position: absolute;
    left: .75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

const StyledInput = styled.input`
  border: none;
  width: 20rem;
  height: 2.5rem;
  padding: 0 1rem 0 2.5rem;

  &:focus {
    outline: none;
  }
`

const StyledDropdownMenu = styled.div`
  position: absolute;
  z-index: 5;
  top: 100%;
  width: 100%;
  max-height: 10rem;
  overflow-y: auto;
  background: #fff;
  padding: .5rem 1rem;
  border-radius: 0 0 2px 2px;
  border: 1px solid #eaeaea;
  border-top-color: #1c1f2b;
  margin: -1px 0 0;
`

const StyledLink = styled(Link)`
  display: block;
  color: #787882;
  margin: 0 0 .5rem;
  
  mark {
    padding: 0;
    color: #282d3e;
    background: none;
  }
`

class SearchCompany extends Component {
  static propTypes = {
    companyList: PropTypes.arrayOf(PropTypes.object).isRequired,
    getCompanyListByTerm: PropTypes.func.isRequired,
  }

  state = {
    dropdownOpen: false,
    term: '',
  }

  handleClickOutside = () =>
    this.setState({ dropdownOpen: false })

  render() {
    const { companyList, getCompanyListByTerm } = this.props

    return (
      <StyledSearchCompany>
        <StyledInputWrapper isFocused={ this.state.dropdownOpen }>
          <StyledInput
            type="text"
            onFocus={ () => this.setState({ dropdownOpen: true }) }
            placeholder="Search company by name..."
            value={ this.state.term }
            onChange={ e => {
              this.setState({ term: e.target.value })
              getCompanyListByTerm(e.target.value)
            } } />
          <Fa name="search" />
        </StyledInputWrapper>
        {companyList.length > 0 && this.state.dropdownOpen &&
        <StyledDropdownMenu>
          {companyList.map(({ name, id }, i) =>
            <div key={ i }>
              <StyledLink to={ `/company/${id}/` } onClick={ () => this.setState({ dropdownOpen: false, term: name }) }>
                <Highlight searchWords={ [this.state.term] } textToHighlight={ name } />
              </StyledLink>
            </div>
          )}
        </StyledDropdownMenu>}
      </StyledSearchCompany>
    )
  }
}

const mapStateToProps = state => ({
  companyList: state.company.byTerm,
})

const mapDispatchToProps = { getCompanyListByTerm }

const SearchCompanyOutside = onClickOutside(SearchCompany)

export default connect(mapStateToProps, mapDispatchToProps)(SearchCompanyOutside)
