import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../redux/missions/missionsSlice';

const Mission = ({ missionProp }) => {
  const dispatch = useDispatch();
  let variant = 'outline-secondary';
  let text = 'Join Mission';
  let variantStatus = 'secondary';
  let statusText = 'NOT A MEMBER';
  if (missionProp.reserved) {
    variant = 'outline-danger';
    text = 'Leave Mission';
    variantStatus = 'success';
    statusText = 'Active Member';
  }

  return (
    <tr>
      <td><strong>{missionProp.missionName}</strong></td>
      <td>{missionProp.description}</td>
      <td className="align-middle"><Button variant={variantStatus} size="sm">{statusText}</Button></td>
      <td className="align-middle">
        <Button
          variant={variant}
          onClick={() => { dispatch(toggleReservation(missionProp.missionId)); }}
        >
          { text }
        </Button>
      </td>
    </tr>
  );
};
Mission.propTypes = {
  missionProp: PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    missionId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
