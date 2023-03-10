import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rocket from '../components/Rocket';
import store from '../redux/store';

describe('Tests for <Rocket /> component', () => {
  const rockets = [{
    id: '1',
    name: 'Rocket 1',
    description: 'Rocket Desc 1',
    flickr_images: ['1', '2', '3'],
  }, {
    id: '2',
    name: 'Rocket 2',
    description: 'Rocket Desc 2',
    flickr_images: ['1', '2', '3'],
  }];

  const wrapper = (component) => (
    <Provider store={store}>
      <>
        {component}
      </>
    </Provider>
  );

  it('Should render two rockets', () => {
    render(wrapper(<Rocket rockets={rockets} />));
    expect(screen.queryByTestId('rockets-container').children.length).toBe(2);
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(
      <Rocket rockets={rockets} />,
    )).toJSON()).toMatchSnapshot();
  });
});
