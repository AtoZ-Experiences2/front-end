// experience cards. function mapping over data and creating a card for each one.
import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import AllExperiencesCard from './AllExperiencesCard'

//map the data/activities and create individual cards for each.
export default function AllExperiences(props) {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get("https://a-to-z-experience.herokuapp.com/api/experiences")
      .then(res => {
        setExperiences(res.data.experiences);
        console.log("response",res.data.experiences)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = id => {
  // axios call to delete
    console.log(`DELETE experience with id of ${id}?`)
    axios
  }

  const handleEdit = id => {
  // axios call to edit
    console.log(`UPDATE experience with id of ${id}?`)
  }

  const filterByPrice = prices.filter((cost) => {
    return cost.experience < 50;
})
  filterByPrice


  const filterExperiences = experiences.filter((experience) => {
    return experience.activity === "Outdoors";
  })
  filterExperiences


  const filterByLocation = cities.filter((city) => {
    return cities.location === "Newport Beach";
  })
  filterByLocation

  const filterByDate = dates.filter((date) => {
    return dates.date_time === "1pm";
  })
  filterByDate


  return (
    <div className="container row mb-5">
      {experiences.map((activity, index) => (
        <AllExperiencesCard 
          id={activity.id}
          event_name={activity.event_name}
          category={activity.category}
          date_time={activity.date_time}
          location={activity.location}
          cost={activity.cost}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          filterByPrice={handlePrice}
          filterExperiences={handleCategory}
        />
      ))}
    </div>
  )
}