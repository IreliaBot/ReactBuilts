import React from 'react'
import './Profile.css'
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo.js'

function Profile() {
    return (     
    <div className='profile'>
      <ProfileInfo/>
      <Posts/>
    </div>   
    )
  }
export default Profile