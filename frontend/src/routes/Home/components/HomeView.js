import React from 'react'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import './HomeViewStyle.scss'

import LabsLogo from '../assets/WeWorkLabsLogo.png'
import LoginForm from './LoginForm'
import SocialFooter from './SocialFooter'


class HomeView extends React.Component {

  handleLogin = async (values) => {
    // Placeholder function
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);
    console.log(values);
  }

  render() {
    return(
      <div>
        <div className='flex-row'>
          <div className='bg'>
          </div>
          <div className='flex-column'>
            <img src={LabsLogo} alt={"WeWork Labs Logo"} className='labs-logo'/>
            <div className='mal side-container'>
              <h2 className='text-center'>Hello</h2>
              <p className='text-center'>Some text about wework labs and how dope and exclusive it is.</p>
              <LoginForm
                onSubmit={this.handleLogin}
              />
            </div>
            <div className='mal side-container'>
              <SocialFooter/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default HomeView
