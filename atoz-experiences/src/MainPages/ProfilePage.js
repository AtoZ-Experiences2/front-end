import React from 'react';
import MyEvents from '../ChildrenComponents/ProfilePageComponents/MyEvents';
import LoggedNavBar from '../ChildrenComponents/LoggedNavBar';
import ProfileHeader from '../ChildrenComponents/ProfilePageComponents/ProfileHeader';

export default function ProfilePage (props) {

  return(
    <div>
      <LoggedNavBar />
      <ProfileHeader />
    </div>
  );
}