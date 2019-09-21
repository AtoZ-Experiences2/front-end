import React, { useState, useEffect} from 'react'
import { Header, Image } from 'semantic-ui-react'

function ProfileHeader  () {
  const [user, setUser] = useState([{
    name: 'placeholdername',
    username: 'placeholderuser',
    location: 'placeholderlocation',
    email: 'placeholder@email.com',
  }]);

  return (
    user.map((e, index) => (
      <div key={index}>
        <Header as='h2'>
          <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> 
          {e.name}
        </Header>
      </div>
    ))
  
)}

export default ProfileHeader
