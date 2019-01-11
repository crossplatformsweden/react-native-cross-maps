import LocationService from './LocationService';

const coordMock = {
  latitude: 10,
  longitude: 10,
};

const regionMock = {
  latitude: 10,
  longitude: 10,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

describe('services', () => {
  // describe('LocationService', () => {
  //   it('watchLocation callback goes through', () => {
  //     expect(LocationService.watchLocation(()=>void)).toHaveBeenCalled();
  //   });

  it('getMapPointForCoordiantes returns IRegion', () => {
    const getmappointforcoords = LocationService.getMapPointForCoordiantes([
      coordMock,
    ]);
    expect(getmappointforcoords).toEqual(regionMock);
  });

  it('getCurrentLocation returns true', () => {
    expect(LocationService.getCurrentLocation()).toBeTruthy();
  });
});
