import React from 'react'
import LabsLogo from '../assets/WeWorkLabsLogo.png'
import './HomeViewStyle.scss'

import LoginForm from './LoginForm'

export const HomeView = () => (
  <div>
    <div className='flex-row'>
      <div className='bg'>
      </div>
      <div className='flex-column'>
        <img src={LabsLogo} alt={"WeWork Labs Logo"} className='labs-logo'/>
        <div className='mal side-container'>
            <h2 className='text-center'>Hello</h2>
            <p className='text-center'>Some text about wework labs and how dope and exclusive it is.</p>
            <LoginForm/>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
