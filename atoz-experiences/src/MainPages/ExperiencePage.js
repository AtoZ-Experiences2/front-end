import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ExperienceCard from '../ChildrenComponents/ExpPageComponents/ExperienceCard';
import { Route, Switch } from 'react-router-dom';

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

  function deleteExperience(props)  {
    const updatedExperience = experience.filter(experiences => !experiences.completed);
    setExperience(updatedExperience);
  }

  return(
    <div>
      {experience.map(exp => (
        <ExperienceCard key={exp.category} 
        experience={exp}
        city={exp.city}
        topic={exp.topic}
        start_date={exp.start_date}
        facet_values={exp.facet_values} />

      <Switch>
        <Route exact path='/' render={props => <ExperiencePage {...props} experience={experience} delete={deleteExperience} />} />
      </Switch>
      // <button onClick={props.delete}>
      //   Delete
      // </button>
    </div>
  ))}
  )
  
}