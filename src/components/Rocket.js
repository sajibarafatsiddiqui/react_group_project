import React from 'react';
import './Rocket.css'

const Rocket = ({ rockets }) => {
    console.log(rockets);
    return (
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.id} className="container">
            <img src={rocket.flickr_images[0]} alt="{rocket.name}" className="rocket-img" />
            <div className="text-wrapper">
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <button type="button" className="reserve-btn">Reserve Rocket</button>
            </div>
          </div>
        ))}
      </div>
    );
  };  
  
  export default Rocket;
  