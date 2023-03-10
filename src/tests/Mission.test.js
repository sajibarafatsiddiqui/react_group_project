import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from 'components/Mission';
import store from 'redux/store';
import { Table } from 'react-bootstrap';

describe('Tests for <Mission /> component', () => {
  const newMission = {
    missionId: '2',
    missionName: 'Mission 2',
    description: 'Mission description',
  };
  const testMission = (reserved) => (
    <Mission key={newMission.missionId} missionProp={{ ...newMission, reserved }} />

  );
  const wrapper = (component) => (
    <Provider store={store}>
      <Table>
        <tbody>

          {component}
        </tbody>
      </Table>
    </Provider>
  );
  it('Should render the content correctly', () => {
    render(wrapper(testMission(false)));
    expect(screen.getByText(newMission.missionName)).not.toBeNull();
    expect(screen.getByText(newMission.description)).not.toBeNull();
  });

  it('Should display the reservqe button when reserved is false', () => {
    render(wrapper(testMission(false)));
    expect(screen.queryByText('NOT A MEMBER')).not.toBeNull();
    expect(() => screen.getAllByText('Leave Mission')).toThrow();
  });

  it('Should display the cancel reservation button when reserved is true', () => {
    render(wrapper(testMission(true)));
    expect(screen.queryByText('Active Member')).not.toBeNull();
    expect(() => screen.getAllByText('Join Mission')).toThrow();
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(testMission(false))).toJSON()).toMatchSnapshot();
  });
});
