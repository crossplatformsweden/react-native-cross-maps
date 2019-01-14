import React from 'react';
import MapComponent from './MapComponent';
import TestRenderer from 'react-test-renderer';
import { ILatLng } from '../../types';

jest.unmock('react-native');

const coords = {
  latitude: 1,
  longitude: 0,
};

// Default export requires this type of mocking
jest.mock('react-native-maps', () => ({
  __esModule: true,
  MapView: 'View',
  Marker: 'View',
  Callout: 'View',
  Ploygon: 'View',
  Polyline: 'View',
  Circle: 'View',
  Overlay: 'View',
  PROVIDER_GOOGLE: '',
  MarkerAnimated: 'View',
  default: 'View',
}));

jest.mock('../../services/location-service/LocationService', () => ({
  getCurrentLocation: () =>
    new Promise<ILatLng>((resolve) => {
      resolve({
        latitude: 3,
        longitude: 2,
      });
    }),
}));

jest.mock('../../services/map-service/MapService', () => ({
  goToUserLocation: () => console.log('IM A MOCKED GOTOUSERLOCATON FUNC'),
}));

function setup() {
  return TestRenderer.create(<MapComponent />);
}

describe('components', () => {
  describe('<MapComponent />', () => {
    it('renders correctly with defaults', () => {
      const wrapper = setup();
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Should have state.mapMargin = 1', () => {
      const wrapper = setup();
      const state = wrapper.root.instance.state;
      expect(state.mapMargin).toBe(1);
    });

    it('api key', () => {
      const wrapper = TestRenderer.create(<MapComponent apikey="1234" />);
      expect(wrapper.root.instance.props.apikey).toBe('1234');
    });

    it('destination prop can be inserted by user', () => {
      const wrapper = TestRenderer.create(
        <MapComponent destination={coords} />
      );
      expect(wrapper.root.instance.props.destination).toBe(coords);
    });

    // it('onRegionChange is called', () => {
    //   const wrapper = TestRenderer.create(<MapComponent />);
    //   expect(wrapper.root.props.instance.onRegionChange).toBeCalled();
    // });

    it('Go to user location should set state', async () => {
      let res;
      const func = (data: any) => {
        console.log('HERE', data);
        res = data;
      };
      const wrapper = TestRenderer.create(
        <MapComponent onUserLocationChanged={func} />
      );
      const inst: any = wrapper.getInstance();
      if (!inst) {
        throw new Error('No instance');
      }
      inst.setMap(1);
      await inst.goToUserLocation();
      console.log('FINNIDHED EXECUTING');
      // expect(func).toBeCalled();

      expect(res).toBeDefined();
      // const state = wrapper.root.instance.state;
      // console.log('userLocation', state.userLocation);
      // expect(state.userLocation).toBeDefined();
      //expect(func).toBeCalledTimes(1);

      expect(res).toEqual({
        latitude: 3,
        longitude: 2,
      });
    }, 8000);

    it('MapView has "maxZoomLevel" = "18"', () => {
      const wrapper = setup();
      const child = wrapper.root.findByProps({ maxZoomLevel: 18 });
      expect(child).toBeDefined();
    });
  });
});
