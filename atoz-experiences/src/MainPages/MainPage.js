import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopExp from '../ChildrenComponents/MainPageComponents/TopExp';
import NavBar from '../ChildrenComponents/NavBar';
import AllExperienceCard from '../ChildrenComponents/MainPageComponents/AllExperiencesCard';

export default function MainPage () {
  const [activities, setActivities] = useState ([])

  useEffect(() => {
    const getActivityList = () => {
      axios
      .get("http://api.amp.active.com/v2/search/?current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=wwvg2896yvkbhab42kg3e4sh")
      .then(resp => {
        setActivities(resp.data.results);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
    }

    getActivityList();
  }, []);

  return (
    <div>
      <NavBar />
      {activities.map(activity => (
        <AllExperienceCard key={activity.category} 
        activity={activity} 
        city={activity.city} 
        topic={activity.topic} 
        start_date={activity.start_date} 
        facet_values={activity.facet_values} />
      ))}
    </div>
  )
}