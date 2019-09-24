import React, { useState, useEffect} from 'react';
import { Jumbotron } from 'reactstrap';
import axios from 'axios';

function ProfileHeader  (props) {
  
  const [userInfo, setUserInfo] = useState({})

  useEffect((
    axios.get('')
      .then(res => {
        setUserInfo(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  ), [])

  return (
    <div className = 'profile-header'>
      <Jumbotron>
        <h1 className='display-3'>Welcome back, {props.userInfo.name}!</h1>
        <p className='lead'>What would you like to do today?</p>
      </Jumbotron>
    </div>
)}

export default ProfileHeader
