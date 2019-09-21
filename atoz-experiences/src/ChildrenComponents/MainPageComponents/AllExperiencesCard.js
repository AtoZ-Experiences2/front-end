import React from 'react';

export default function AllExperiencesCard (props) {
  const { topic, image, city, activity, start_date, facet_values }= props.activity;

  return (
   <div> 
    <img src={image} alt={activity} />
    <AllExperiencesCard> 
      Experience You Want: {activity} 
      Category: {topic} 
      Location: {city} 
      Date(s): {start_date}
      Price: {facet_values}
     </AllExperiencesCard> 
    </div> 
  );
}