import { Route, Routes } from 'react-router-dom';
import Layout from 'routes/Layout';
import Rockets from 'routes/Rockets';
import Missions from 'routes/Missions';
import Profile from 'routes/Profile';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
);

export default App;
