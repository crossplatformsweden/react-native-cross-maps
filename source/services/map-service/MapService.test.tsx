import MapService from './MapService';

const mapMock = {
  animateToViewingAngle: (angle : number) => angle * 2,
  animateToBearing: (angle : number) => angle * 3,
  animateToCoordinate: () => true,
  fitToCoordinates: () => true,
  goToCoordinate: () => true,
  animateToRegion: () => true,
};

describe('services', () => {
  describe('MapService', () => {
    it('goToAngle with 10 returns 20', () => {
      // @ts-ignore
      expect(MapService.goToAngle(mapMock, 10, 0)).toBe(20);
    });

    it('fitToCoordinates returns true', () => {
      expect(
        // @ts-ignore
        MapService.fitToCoordinates(mapMock, [{ latitude: 1, longitude: 2 }])
      ).toBeTruthy();
    });

    it('goToCoordinate returns true', () => {
      expect(
        // @ts-ignore
        MapService.goToCoordinate(mapMock, { latitude: 1, longitude: 2 })
      ).toBeTruthy();
    });

    it(
      'goToUserLocation returns true',
      () => {
        // @ts-ignore
        MapService.goToUserLocation(mapMock, { latitude: 1, longitude: 2 });
      },
      300
    );
  });
});
