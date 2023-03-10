import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMissions } from 'redux/missions/missionsSlice';
import MissionList from '../components/MissonList';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);
  useEffect(() => {
    dispatch(fetchAllMissions());
  }, [dispatch]);
  return (
    <>
      <MissionList missions={missions} />
    </>
  );
};

export default Missions;
