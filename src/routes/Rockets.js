import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from 'redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  const ifSucceed = useSelector((state) => state.rockets.ifSucceed);

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Rockets</h1>
      {ifSucceed ? <Rocket rockets={rockets} /> : null}
    </div>
  );
};

export default Rockets;

