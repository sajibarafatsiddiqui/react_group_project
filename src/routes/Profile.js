import ReservedRockets from 'components/ReservedRockets';
import ReservedMissions from '../components/ReservedMissions';

const Profile = () => (
  <div className="d-flex p-5 gap-5">
    <ReservedMissions />
    <ReservedRockets />
  </div>
);

export default Profile;
