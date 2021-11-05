import React from 'react'
import './Profile.css'
import ava from '../../img/elon.jpg'
import Posts from './posts/Posts'
function Profile() {
    return (
        
  <div className='profile'>
    <div className='me'>
      <img src={ava} alt="profile mini photo" />
      <p>Elon Mask</p>
    </div>
    <Posts/>
  </div>
        
    )
  }
export default Profile