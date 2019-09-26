import React, { useState, useEffect} from 'react';
import { Jumbotron } from 'reactstrap';
import axios from 'axios';

function ProfileHeader  (props) {
  const token = localStorage.getItem('token')
    const requestOptions = {
      headers: {
        Authorization: token
      }
    }
   const [userInfo, setUserInfo] = useState({})

  const id = props.match.params.id

   useEffect((
    axios.get(`'https://a-to-z-experience.herokuapp.com/users/${id}'`, requestOptions)
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
        <h1 className='display-3'>Welcome back, {userInfo.name}!</h1>
        <p className='lead'>What would you like to do today?</p>

      </Jumbotron>
    </div>
)}

export default ProfileHeader
