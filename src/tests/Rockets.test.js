import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../routes/Rockets';

describe('Tests for <Rockets /> component', () => {
  const initialState = {
    rockets: [{
      id: '1',
      name: 'Rocket 1',
      description: 'Rocket Desc 1',
      flickr_images: ['1', '2', '3'],
    }, {
      id: '2',
      name: 'Rocket 2',
      description: 'Rocket Desc 2',
      flickr_images: ['1', '2', '3'],
    }],
    ifSucceed: true,
    isLoading: false,
  };

  const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
  });

  const store = configureStore({
    reducer: {
      rockets: rocketsSlice.reducer,
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
    render(wrapper(<Rockets />));
    expect(screen.queryByTestId('rockets-container').children.length).toBe(2);
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(<Rockets />)).toJSON()).toMatchSnapshot();
  });
});
