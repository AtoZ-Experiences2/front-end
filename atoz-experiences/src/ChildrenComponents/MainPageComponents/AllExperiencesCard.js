import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function AllExperiencesCard(props) {

    // This is the code for each experience card.
    // Since we have access to all the information about the experience, including the id, we can easily edit and delete each card here
    // by making calls to our API using the props we received from AllExperiences.js


    console.log('props', props)
    return (
      <div className="card mt-3 mx-3 bg-light">

          <div className="card-body">
            <input
              type="text"
              className="card-title"
              name="name"
              value={props.event_name}
              onChange={(e) => this.handleChange(e)}
            />

            <ul className="list-group">
              <input
                type="text"
                name="time"
                className="list-group-item"
                value={props.category}
              />

              <input
                type="text"
                name="location"
                className="list-group-item"
                value={props.location}
              />

              <input
                type="text"
                name="time"
                className="list-group-item"
                value={props.date_time}
              />

              <input
                type="text"
                name="time"
                className="list-group-item"
                value={props.cost}
              />
            </ul>


            <button
              className="btn btn-outline-success mt-2"
              type="button"
              onClick={() => props.handleEdit(props.id)}
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