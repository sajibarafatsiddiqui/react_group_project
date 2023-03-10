import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ReservedMissions = () => {
  const { missions } = useSelector((store) => store.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div>
      <h3>My Missions</h3>
      {reservedMissions.length > 0
        ? (
          <Table className="border border-secondary w-40">
            <tbody>
              { reservedMissions.map((mission) => (
                <tr key={mission.missionId}>
                  <td key={mission.missionId}>
                    {mission.missionName}
                  </td>
                </tr>
              )) }
            </tbody>
          </Table>
        ) : <p>You have not reserved any missions yet.</p> }

    </div>
  );
};

export default ReservedMissions;
