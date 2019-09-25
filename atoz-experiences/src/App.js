import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AddExperience from './MainPages/AddExperience';
import ExperiencePage from './MainPages/ExperiencePage';
import MainPage from './MainPages/MainPage';
import ProfilePage from './MainPages/ProfilePage';
import AllExperiences from './ChildrenComponents/MainPageComponents/AllExperiences';
import Register from './ChildrenComponents/UserLoginComponents/Register';
import SignIn from './ChildrenComponents/UserLoginComponents/SignIn';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={MainPage} />
      <Route path='/user/:userid' component={ProfilePage} />
      <Route path='/register' component={Register} />
      <Route path='/signin' component={SignIn} />
      <Route path='/allexperences' component={AllExperiences} />
      <Route path='/addexperience' component={AddExperience} />
      <Route path='/experience/:experienceid' component={ExperiencePage} /> 
    </div>
  );
}

export default App;
