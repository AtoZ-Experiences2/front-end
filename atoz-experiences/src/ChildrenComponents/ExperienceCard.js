import React from 'react';

export default function ExperienceCard (props) {
  const{ activity, city, topic, start_date, facet_values }

  return (
    <div>
      <ExperienceCard>
        Activity: {activity}
        Category: {topic}
        City: {city}
        Date: {start_date}
        Cost: (fees and taxes not included) {facet_values}
      </ExperienceCard> 
    </div>
  );
}