import React from 'react';
// import TopExp from '../ChildrenComponents/MainPageComponents/TopExp';
import NavBar from '../ChildrenComponents/NavBar';
import AllExperiences from '../ChildrenComponents/MainPageComponents/AllExperiences';
// import AddExperience from './AddExperience';

export default function MainPage () {

  return (
    <div>
      <NavBar />        
          <div className="col-sm-12">
            <AllExperiences />
          </div>

          {/* <div className="col-sm-5">
            <AddExperience />
          </div> */}

        </div>
  )     
}