import { useSelector } from 'react-redux';
import './ReservedRockets.css';

const ReservedRockets = () => {
    const rockets = useSelector(state => state.rockets.rockets);
   
    const reservedRockets = rockets.filter(rocket => localStorage.getItem(`rocket-${rocket.id}`) === 'reserved');
    console.log(reservedRockets)
    return (
      <div>
        <h3>My Rockets</h3>
        {reservedRockets.length > 0 
        ? 
        (reservedRockets.map((rocket) => (
        <div key={rocket.id} className="reserved-rockets"><p>{rocket.name}</p></div>))) 
        : 
        <p>You have not reserved any rockets yet.</p>}
      </div>
    );
  };
  
  export default ReservedRockets;
