import { MapComponent } from './index';

jest.unmock('react-native');

describe('components', () => {
  describe('<MapView />', () => {
    it('Component should render', () => {
      expect(MapComponent).toMatchSnapshot();
    });
  });
});
