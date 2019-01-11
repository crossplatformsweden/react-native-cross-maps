import React from 'react';
import { View } from 'react-native';
import { Colors, CrossButton, styles } from 'react-native-cross-components';

interface IProps {
  onPress: () => void;
}

export const UserLocationButton = ({ onPress }: IProps) => (
  <View style={[styles.absoluteTopRight, { top: 20, right: 0 }]}>
    <CrossButton
      size={40}
      onPress={onPress}
      iconName="dot-circle-o"
      color={Colors.CrossBlack}
      backgroundColor="transparent"
    />
  </View>
);

export default UserLocationButton;
