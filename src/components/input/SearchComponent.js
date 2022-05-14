import React from 'react';
import {StyleSheet} from 'react-native';
import {wp, hp, screenWidth} from '@constants/Dimensions';
import {FontSize} from '@constants/Sizes';
import CustomTextInput from '@components/input/TextInput';
import * as Icons from '@constants/Icons';

const SearchComponent = ({
  placeholder,
  onValueChange,
  onSubmitEditing,
  containerStyle,
  value,
  ...props
}) => {
  let SearchIcon = Icons['search'];

  return (
    <CustomTextInput
      id={'search'}
      placeholder={placeholder}
      style={containerStyle}
      inputStyle={[styles.inputStyle, !value ? styles.placeholderStyle : null]}
      onValueChange={onValueChange}
      onSubmitEditing={onSubmitEditing}
      keyboardKeyType={'search'}
      leftSide={
        <SearchIcon
          style={styles.leftSide}
          width={20}
          height={20}
          color={'#fe4500'}
        />
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: hp(50),
    paddingLeft: wp(30),
    width: wp(395),
  },
  leftSide: {
    position: 'absolute',
    left: wp(10),
  },
  placeholderStyle: {
    fontWeight: '400',
    fontSize: FontSize(15),
  },
});

export default SearchComponent;
