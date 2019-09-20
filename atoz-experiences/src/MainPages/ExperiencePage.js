import React, { useState, useEffect } from 'react';
import ExperienceCard from '../ChildrenComponents/ExperienceCard';

export default function ExperiencePage () {
  const [experience, setExperience] = useState([])

    useEffect (() => {

      const getExperience = () => {
       axios 
        .get("http://api.amp.active.com/v2/search/?current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=wwvg2896yvkbhab42kg3e4sh")
        .then(resp => {
          setExperience(resp.data.results);
          console.log(resp.data);
      })
        .catch(err => {
          console.log(err);
        });
    }
      getExperience();
  }, []);

  return(
    <div>
      {experience.map(exp => (
        <ExperienceCard key={exp.category} 
        activity={activity}
        city={activity.city}
        topic={activity.topic}
        start_date={activity.start_date}
        facet_values={activity.facet_values} />
      ))}
    </div>
  )
}