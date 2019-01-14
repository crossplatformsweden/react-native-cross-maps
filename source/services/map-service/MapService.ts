import _ from 'lodash';
import * as types from '../../types';
import MapView from 'react-native-maps';

export interface IFitToCoordOptions {
  edgePadding: types.IEdgePadding;
  animated: boolean;
}

/**
 * Animates map to the specified coordinates
 *
 * @param {number} lat
 * @param {number} long
 * @memberof MapService
 * @public
 */
export const goToCoordinate = (map: MapView, coordinate: types.ILatLng) => {
  const targetCoords = {
    latitude: Number(coordinate.latitude),
    longitude: Number(coordinate.longitude),
  };

  console.log('** MapService: goToCoordinate **');
  console.log(targetCoords);
  return map.animateToCoordinate(targetCoords, 2000);
};

/**
 * Animate to the specified viewing angle
 *
 * @see https://github.com/react-community/react-native-maps/blob/master/docs/mapview.md#methods
 *
 * @param {number} angle
 * @param {number} duration animation speed
 * @returns
 * @memberof MapService
 */
export const goToAngle = (map: MapView, angle: number, duration?: number) => {
  console.log('** MapService: GoToAngle ' + angle + ' **');
  return map.animateToViewingAngle(angle, duration);
};

/**
 * Animate to the specified bearing
 *
 * @see https://github.com/react-community/react-native-maps/blob/master/docs/mapview.md#methods
 *
 * @param {number} bearing
 * @param {number} duration animation speed
 * @returns
 * @memberof MapService
 */
export const goToBearing = (
  map: MapView,
  bearing: number,
  duration?: number
) => {
  console.log('** MapService: goToBearing ' + bearing + ' **');
  setTimeout(map.animateToBearing(bearing, duration), 10);
};

/**
 * Fit the map to supplied coordinates
 *
 * @param {Array<types.ILatLng>} coordinates
 * @param {{ edgePadding: types.IEdgePadding, animated: Boolean }} options
 * @returns
 * @memberof MapService
 */
export const fitToCoordinates = (
  map: MapView,
  coordinates: types.ILatLng[],
  options?: IFitToCoordOptions
) => {
  console.log('** MapService: fitToCoordinates **');
  return map.fitToCoordinates(coordinates, options);
};

export const zoomToLevel = (
  map: MapView,
  location: types.ILatLng,
  zoomLevel: number
) => {
  const zoom: number = zoomLevel / 1000;
  map.animateToRegion({
    ...location,
    latitudeDelta: zoom,
    longitudeDelta: zoom,
  });
};

/**
 * Animate to location in map state if available
 *
 * @memberof MapService
 * @public
 *
 * @param {Object} userLocation
 */
export const goToUserLocation = (map: MapView, userLocation: types.ILatLng) => {
  try {
    if (!_.get(userLocation, ['latitude'], false)) {
      return;
    }

    setTimeout(() => {
      goToCoordinate(map, userLocation);
      goToAngle(map, 45, 500);
      zoomToLevel(map, userLocation, 1);
    }, 200);
  } catch (ex) {
    console.log(ex);
  }
};
