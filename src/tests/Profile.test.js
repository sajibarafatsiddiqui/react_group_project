/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../routes/Profile';

describe('Tests for <Profile /> component', () => {
  const missionsSlice = createSlice({
    name: 'missions',
    initialState: {
      missions: [{
        missionId: '1',
        missionName: 'Mission 1',
        description: 'Mission desc 1',
        reserved: false,
      }, {
        missionId: '2',
        missionName: 'Mission 2',
        description: 'Mission desc 2',
        reserved: false,
      }],
      isLoading: false,
    },
  });

  const rocketsSlice = createSlice({
    name: 'rockets',
    initialState: {
      rockets: [{
        id: '1',
        name: 'rocket 1',
        images: ['1.jpg'],
        description: 'rocket desc 1',
      }, {
        id: '2',
        name: 'Rocket 2',
        images: ['2.jpg'],
        description: 'rocket desc 2',
        reserved: false,
      }],
      ifSucceed: true,
      isLoading: false,
    },
  });

  const store = configureStore({
    reducer: {
      rockets: rocketsSlice.reducer,
      missions: missionsSlice.reducer,
    },
  });

  const wrapper = (component) => <Provider store={store}>{component}</Provider>;

  it('Should render messages when there are no reserved missions and rockets', () => {
    render(wrapper(<Profile />));
    expect(screen.getByText('You have not reserved any missions yet.')).not.toBeNull();
    expect(screen.getByText('You have not reserved any rockets yet.')).not.toBeNull();
  });
  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(<Profile />)).toJSON()).toMatchSnapshot();
  });
});
