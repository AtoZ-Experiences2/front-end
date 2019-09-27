import React, { useState } from 'react';


// This is the code for each experience card.
// Since we have access to all the information about the experience, including the id, we can easily edit and delete each card here
// by making calls to our API using the props we received from AllExperiences.js

// Assigning set experiences to props using useState instead of an empty string. We want to edit what is already rendered instead of adding a new experience.

export default function AllExperiencesCard(props) {
  const [experience, setExperience] = useState({
      event_name: props.event_name,
      category: props.category,
      date_time: props.date_time,
      location: props.location,
      cost: props.cost
  })
    console.log('props', props)

      const handleChange = event => {
        setExperience({ ...experience, [event.target.name]: event.target.value });
      };
      console.log('experience', experience)

    return (
      <div className="card mt-3 mx-3 bg-light">

          <div className="card-body">
            <input
              type="text"
              className="card-title"
              name="event_name"
              value={experience.event_name}
              onChange={(e) => handleChange(e)}
            />

            <ul className="list-group">
              <input
                type="text"
                name="category"
                className="list-group-item"
                value={experience.category}
                onChange={event => handleChange(event)}
              />

              <input
                type="text"
                name="location"
                className="list-group-item"
                value={experience.location}
                onChange={event => handleChange(event)}
              />

              <input
                type="text"
                name="date_time"
                className="list-group-item"
                value={experience.date_time}
                onChange={event => handleChange(event)}
              />

              <input
                type="text"
                name="cost"
                className="list-group-item"
                value={experience.cost}
                onChange={event => handleChange(event)}
              />
            </ul>


            <button
              className="btn btn-outline-info mt-2"
              type="button"
              onClick={() => props.handleEdit(props.id, experience)}
            >
              Update
            </button>

            <button
              className="btn btn-outline-danger mt-2 ml-2"
              type="button"
              onClick={() => props.handleDelete(props.id)}
            >
              Delete
            </button>
          </div>
       </div>
    )
  }