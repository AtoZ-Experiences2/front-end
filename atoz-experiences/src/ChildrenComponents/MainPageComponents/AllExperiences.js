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

  // const filterByPrice = setPrices(prices.filter(cost => cost < 50))
  // return (
  //   <div>
  //     {
  //       prices.map(price => <p key={price}>{price}</p>)
  //     }
  //     <button onClick={filterByPrice}>Filter</button>
  //   </div>
  // )

//   const filterByPrice = setExperiences=prices.filter((cost) => {
//     return cost.experience < 50;
// })
//   filterByPrice

  // const filterByExperiences = setExperiences(experiences.filter(experience => experience === "Outdoors"))
  // return (
  //   <div>
  //     {
  //       experiences.map(experience => <p key={experience}>{experience}</p>)
  //     }
  //     <button onClick={filterByExperiences}>Filter</button>
  //   </div>
  // )

  // const filterExperiences = setExperiences.filter((experience) => {
  //   return experience.activity === "Outdoors";
  // })
  // filterExperiences

  // const filterByLocation = setCities(cities.filter(city => city === "Newport Beach"))
  // return (
  //   <div>
  //     {
  //       cities.map(city => <p key={city}>{city}</p>)
  //     }
  //     <button onClick={filterByLocation}>Filter</button>
  //   </div>
  // )

  // const filterByLocation = cities.filter((city) => {
  //   return city.location === "Newport Beach";
  // })
  // filterByLocation

  // const filterByDate = setDates(dates.filter(date => date === "1pm"))
  // return (
  //   <div>
  //     {
  //       dates.map(date => <p key={date}>{date}</p>)
  //     }
  //     <button onClick={filterByDate}>Filter</button>
  //   </div>
  // )

  // const filterByDate = dates.filter((date) => {
  //   return date.date_time === "1pm";
  // })
  // filterByDate


  return (
    <div className="container row mb-3 mx-3">
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