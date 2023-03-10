import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionList from '../components/MissonList';
import store from '../redux/store';

describe('Tests for <MissionList /> component', () => {
  const missions = [{
    missionId: '1',
    missionName: 'Mission 1',
    description: 'Mission Desc 1',
    reserved: false,
  }, {
    missionId: '2',
    missionName: 'Mission 2',
    description: 'Mission Desc 2',
    reserved: true,
  }];

  const wrapper = (component) => (
    <Provider store={store}>
      <>
        {component}
      </>
    </Provider>
  );

  it('Should render two missions', () => {
    render(wrapper(<MissionList missions={missions} />));
    expect(screen.queryByTestId('missions-container').children.length).toBe(2);
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(
      <MissionList missions={missions} />,
    )).toJSON()).toMatchSnapshot();
  });
});
