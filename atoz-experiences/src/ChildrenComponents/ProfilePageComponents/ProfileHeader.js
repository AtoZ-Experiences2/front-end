import React, { useState, useEffect} from 'react';
import { Jumbotron } from 'reactstrap';
import axios from 'axios';

function ProfileHeader  (props) {
  
  // const [userInfo, setUserInfo] = useState({})

  // useEffect((
  //   axios.get('https://a-to-z-experience.herokuapp.com/')
  //     .then(res => {
  //       setUserInfo(res.data.results)
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // ), [])

  return (
    <div className = 'profile-header'>
      <Jumbotron>
        <h1 className='display-3'>Welcome back, Roberto!</h1>
        <p className='lead'>What would you like to do today?</p>

      </Jumbotron>
    </div>
)}

export default ProfileHeader
