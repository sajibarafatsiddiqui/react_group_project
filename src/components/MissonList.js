import PropTypes from 'prop-types';
import Mission from 'components/Mission';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

const MissionList = ({ missions }) => (
  { missions }
  && (
  <div className="p-4">
    <Table className="table-responsive" striped bordered hover size="sm">
      <thead>
        <tr>
          <th className="col-md-1">Mission</th>
          <th className="">Description</th>
          <th className="col-sm-1">Status</th>
          <th className="col-md-1">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        { missions?.map((mission) => (
          <Mission key={mission.missionId} missionProp={mission} />
        ))}
      </tbody>
    </Table>
  </div>
  )
);

MissionList.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};
export default MissionList;
