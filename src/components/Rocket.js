import React from 'react';

const Rocket = ({ rockets }) => {
    console.log(rockets);
    return (
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.id}>
            {/* <div>
        {rocket.flickr_images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Rocket ${rocket.name}`} />
        ))}
      </div> */}
            <img src={rocket.flickr_images[0]} alt="{rocket.name}" />
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
          </div>
        ))}
      </div>
    );
  };  
  
  export default Rocket;
  