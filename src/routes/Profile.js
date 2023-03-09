import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const Profile = () => {
  const { missions } = useSelector((store) => store.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div>

      <Table>
        <tbody>

          {reservedMissions.map(
            (mission) => (
              <tr key={mission.missionId}>
                <td key={mission.missionId}>
                  {mission.missionName}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>

    </div>
  );
};

export default Profile;
