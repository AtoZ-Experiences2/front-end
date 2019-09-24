import React, { useState, useEffect} from 'react';
import axios from 'axios';
//map the data/activities and create individual cards for each.
export default function AllExperiencesCard (props) {
  const [activities, setActivities] = useState([{}]);

  useEffect(() => {
    axios
    .get("http://api.amp.active.com/v2/search/?current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=wwvg2896yvkbhab42kg3e4sh")
    .then(resp => {
      setActivities(resp.data.results);
      console.log(resp.data.results);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

  return (
   <div>

   </div>
  );
}