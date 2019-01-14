import * as React from 'react';
import _ from 'lodash';
import { View } from 'react-native';
// @ts-ignore - missing in definition
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as types from '../../types';
import LocationService from '../../services/location-service/LocationService';
import * as MapService from '../../services/map-service/MapService';
import { ILatLng } from '../../types';
// @ts-ignore
import MapViewDirections from 'react-native-maps-directions';
import UserLocationButton from '../../components/user-location-button/UserLocationButton';
import { styles, Colors } from 'react-native-cross-components';
import MapViewProps from 'react-native-maps';
import { MapViewDirectionsProps, IRegion } from '../../types';

interface IState {
  mapMargin: number;
  userLocation?: ILatLng;
}

interface IProps {
  mapViewProps?: MapViewProps;
  mapNavigationProps?: MapViewDirectionsProps;
  initialRegion?: IRegion;
  destination?: ILatLng | null;
  apikey?: string;
  userLocationButton?: boolean;
  goToLocation?(newLocation: types.ILatLng): void;
  onRegionChange?: (newRegion: IRegion) => void;
  onUserLocationChanged?: (newLocation: ILatLng) => void;
}

let map: any;

export class MapComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      mapMargin: 1,
    };

    // this.setMap = this.setMap.bind(this);
    this.getPredefinedPlaces = this.getPredefinedPlaces.bind(this);
    this.goToUserLocation = this.goToUserLocation.bind(this);
    this.onMapReady = this.onMapReady.bind(this);
  }

  public async goToLocation(coordinate: types.ILatLng) {
    if (!map) {
      return;
    }

    MapService.goToUserLocation(map, coordinate);
  }

  public async goToUserLocation() {
    console.log('goToUserLocation has map? ' + !_.isNil(map));
    if (!map) {
      return;
    }

    console.log(
      'goToUserLocation has LocationService? ' + !_.isNil(LocationService)
    );
    const coordinate = await LocationService.getCurrentLocation();
    MapService.goToUserLocation(map, coordinate);
    this.setState({ userLocation: coordinate });
    if (this.props.onUserLocationChanged) {
      console.log('goToUserLocation calls onUserLocationChanged');
      this.props.onUserLocationChanged(coordinate);
    }
  }

  /**
   * Get list of predefined places available in autocomplete
   */
  getPredefinedPlaces(): Array<Object> {
    // const { userLocation } = this.state;
    // if (!_.isNil(userLocation)) {
    //   const userPlace = {
    //     description: 'Min nuvarande plats',
    //     geometry: {
    //       location: {
    //         lat: userLocation.latitude,
    //         lng: userLocation.longitude,
    //       },
    //     },
    //   };
    //   return [userPlace];
    // }

    return [];
  }

  setMap(ref: any) {
    map = ref;
  }

  onMapReady() {
    this.setState({ mapMargin: 0 });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          maxZoomLevel={18}
          zoomEnabled={true}
          loadingEnabled={false}
          showsBuildings={false}
          showsUserLocation
          showsIndoors={false}
          showsMyLocationButton={false}
          toolbarEnabled={false}
          onMapReady={this.onMapReady}
          onRegionChangeComplete={(region: types.IRegion) => {
            if (!_.isNil(this.props.onRegionChange)) {
              this.props.onRegionChange(region);
            }
          }}
          loadingIndicatorColor={Colors.CrossLightBlue}
          showsCompass={false}
          ref={this.setMap}
          style={[styles.container, { marginBottom: this.state.mapMargin }]}
          provider={PROVIDER_GOOGLE}
          {...this.props.mapViewProps}
        >
          {this.state.userLocation &&
          this.props.destination &&
          this.props.destination.latitude ? (
            <MapViewDirections
              origin={this.state.userLocation}
              destination={{
                latitude: Number(this.props.destination.latitude),
                longitude: Number(this.props.destination.longitude),
              }}
              //TODO PARAMS
              apikey={this.props.apikey}
              strokeColor="blue"
              strokeWidth={3}
              {...this.props.mapNavigationProps}
            />
          ) : null}
          {this.props.children}
        </MapView>
        {this.props.userLocationButton ? (
          <UserLocationButton onPress={this.goToUserLocation} />
        ) : null}
      </View>
    );
  }
}

export default MapComponent;
