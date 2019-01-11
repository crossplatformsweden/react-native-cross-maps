import React from 'react';
import TestRenderer from 'react-test-renderer';
import { UserLocationButton } from './UserLocationButton';
import { CrossButton } from 'react-native-cross-components';

jest.unmock('react-native');

const wrapper = TestRenderer.create(
  <UserLocationButton onPress={() => console.log('pressed')} />
);

describe('components', () => {
  describe('UserLocationButton', () => {
    it('should render self and subcomponents', () => {
      const json = wrapper.toJSON();
      expect(json).toMatchSnapshot();
    });

    it('button chould have child button', () => {
      const btn = wrapper.root.findByType(CrossButton);
      expect(btn.props.iconName).toBe('dot-circle-o');
    });
  });
});
