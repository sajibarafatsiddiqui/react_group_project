import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from 'redux/rockets/rocketsSlice';
import './Rocket.css';

const Rocket = ({ rockets }) => {
    const dispatch = useDispatch();
  
    const handleReserve = (id) => {
      dispatch(reserveRocket(id));
    };
  
    const handleCancelReservation = (id) => {
      dispatch(cancelReservation(id));
    };
  
    return (
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.id} className="container">
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              className="rocket-img"
            />
            <div className="text-wrapper">
            <div>
              <h2>{rocket.name}</h2> 
                <p>{rocket.reserved && <span className="badge">Reserved</span>} {rocket.description}</p>
            </div>
            {rocket.reserved ? (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => handleCancelReservation(rocket.id)}
              >
                Cancel reservation
              </button>
            ) : (
              <button
                type="button"
                className="reserve-btn"
                onClick={() => handleReserve(rocket.id)}
              >
                Reserve Rocket
              </button>
             )}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Rocket;

Rocket.propTypes = {
  rockets: PropTypes.string.isRequired,
};
