import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../routes/Missions';

describe('Tests for <MissionList /> component', () => {
  const initialState = {
    missions: [{
      missionId: '1',
      missionName: 'Mission 1',
      description: 'Mission Desc 1',
      reserved: false,
    }, {
      missionId: '2',
      missionName: 'Mission 2',
      description: 'Mission Desc 2',
      reserved: true,
    }],
    isLoading: false,
  };

  const missionSlice = createSlice({
    name: 'missions',
    initialState,
  });

  const store = configureStore({
    reducer: {
      missions: missionSlice.reducer,
    },
  });

  const wrapper = (component) => (
    <Provider store={store}>
      <>
        {component}
      </>
    </Provider>
  );

  it('Should render two missions', () => {
    render(wrapper(<Missions />));
    expect(screen.queryByTestId('missions-container').children.length).toBe(2);
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(<Missions />)).toJSON()).toMatchSnapshot();
  });
});
