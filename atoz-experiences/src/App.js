import React from 'react';
import './App.css';
import AddExperience from './MainPages/AddExperience';
import ExperiencePage from './MainPages/ExperiencePage';
import MainPage from './MainPages/MainPage';
import ProfilePage from './MainPages/ProfilePage';
import SignUpPage from './MainPages/SignUpPage';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AddExperience />
      <ExperiencePage /> 
      <ProfilePage />
      <SignUpPage />
    </div>
  );
}

export default App;
