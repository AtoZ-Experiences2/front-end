// experience cards. function mapping over data and creating a card for each one.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllExperiencesCard from './AllExperiencesCard'

//map the data/activities and create individual cards for each.
export default function AllExperiences() {
  const [experiences, setExperiences] = useState([]);
  // const [prices, setPrices] = useState ([])
  // const [cities, setCities] = useState ([])
  // const [dates, setDates] = useState ([])
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
    axios.delete(`https://a-to-z-experience.herokuapp.com/api/experiences/${id}`)
    .then(res => {
      window.location.reload()
      console.log(`DELETE experience with id of ${id}?`)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleEdit = (id, experience) => {
    console.log('Experience from handleEdit', experience)
    axios.put(`https://a-to-z-experience.herokuapp.com/api/experiences/${id}`, experience)
    .then(res => {
      window.location.reload()
      console.log(`UPDATE experience with id of ${id}?`)
    })
    .catch(err => {
      console.log(err);
    })
  }

// edit/update === put for axios call 'CRUD'
  // filterByPrice isn't a function declaration it's an invocation of a function that sets state and saves the return value(probably undefined ?) to the variable filterByPRice
  // Every time the component renders that function runs, and every time that function runs it updates state, and every time state updates the component renders 

  // const filterByPrice = () => {

  //   const filteredPrices = experiences.filter(experience => experience.cost < 15);
  //   console.log('experiences', experiences);
  //   console.log('filteredPrices', filteredPrices);
  //   setExperiences(filteredPrices);

  // }

  // const filterByExperiences = () => {
  //   setExperiences(experiences => experiences.filter(experience => experience.category === "Outdoors"))
  // }

  // const filterByPrice = () => {
  //   setExperiences(experiences.filter((experience) => {
  //     return experience.cost < 50
  //   }))
  // }

  // const filterExperiences = experiences.filter((experience) => {
  //   return experience.category === "Outdoors";
  // })

  //   const filterByLocation = () => {
  //     setCities(cities => cities.filter(city => city === "NewPort Beach"))
  //   }
   
 
  // const filterByDate = dates.filter((date) => {
  //   return date.date_time === "1pm";
  // })


  return (
    <div className="container row mb-3 mx-3">
      {/* <button onClick={() => filterByExperiences()}>Filter by Experience</button> */}
      {/* <button onClick={filterByLocation}>Filter by Location</button>
      <button onClick={filterByDates}>Filter by Date</button> */}
      {/* <button onClick={() => filterByPrice()}>Filter by Price</button> */}
      {experiences.map((activity) => (
        <AllExperiencesCard 
          id={activity.id}
          event_name={activity.event_name}
          category={activity.category}
          date_time={activity.date_time}
          location={activity.location}
          cost={activity.cost}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          filterByPrice={activity.cost}
          filterExperiences={activity.category}
          filterByLocation={activity.location}
          filterByDate={activity.date_time}
        />
      ))}
    </div>
  )
}