import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {wp} from '@constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import * as Icons from '@constants/Icons';

const BackButtonComponent = ({
  iconName,
  containerStyle,
  onPress,
  color,
  backgroundColor,
  ...props
}) => {
  const navigation = useNavigation();
  const onHandle = () => {
    navigation.goBack();
  };
  let Icon = Icons[iconName];

  return (
    <TouchableOpacity
      style={[
        styles.containerStyle,
        containerStyle,
        {backgroundColor: backgroundColor},
      ]}
      onPress={!!onPress ? onPress : onHandle}
      testID={'header-back-button'}>
      <Icon color={color} />
    </TouchableOpacity>
  );
};

export default BackButtonComponent;

const styles = StyleSheet.create({
  containerStyle: {
    height: wp(32),
    width: wp(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
