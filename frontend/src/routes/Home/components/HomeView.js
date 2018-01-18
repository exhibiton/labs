import React from 'react'
import LabsLogo from '../assets/WeWorkLabsLogo.png'
import './HomeViewStyle.scss'

import LoginForm from './LoginForm'

export const HomeView = () => (
  <div>
    <div className='row'>
      <div className='col-md-7 bg d-none d-md-block'>
      </div>
      <div className='col-md-5 col-sm-12'>
        <div className='row'>
          <div className='col-md-12'>
            <img src={LabsLogo} alt={"WeWork Labs Logo"} className='labs-logo'/>
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-md-8'>
            <h2 className='text-center'>Hello</h2>
            <p className='text-center'>Some text about wework labs and how dope and exclusive it is.</p>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
