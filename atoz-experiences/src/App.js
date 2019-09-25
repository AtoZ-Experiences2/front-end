import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AddExperience from './MainPages/AddExperience';
import ExperiencePage from './MainPages/ExperiencePage';
import MainPage from './MainPages/MainPage';
import ProfilePage from './MainPages/ProfilePage';
import Activities from './ChildrenComponents/MainPageComponents/Activities';
import Locations from './ChildrenComponents/MainPageComponents/Locations';
import Register from './ChildrenComponents/UserLoginComponents/Register';
import SignIn from './ChildrenComponents/UserLoginComponents/SignIn';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={MainPage} />
      <Route path='/user/:userid' component={ProfilePage} />
      <Route path='/register' component={Register} />
      <Route path='/signin' component={SignIn} />
      <Route path='/activities' component={Activities} />
      <Route path='/locations' component={Locations} />
      <Route path='/addexperience' component={AddExperience} />
      <Route path='/experience/:experienceid' component={ExperiencePage} /> 
    </div>
  );
}

export default App;
