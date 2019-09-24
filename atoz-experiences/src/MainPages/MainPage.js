import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopExp from '../ChildrenComponents/MainPageComponents/TopExp';
import NavBar from '../ChildrenComponents/NavBar';
import AllExperienceCard from '../ChildrenComponents/MainPageComponents/AllExperiencesCard';

export default function MainPage () {


  return (
    <div>
      <NavBar />
      <AllExperienceCard />
    </div>
  )
}