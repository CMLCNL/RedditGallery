import SearchComponent from '@src/components/input/SearchComponent';
import {hp} from '@src/constants/Dimensions';
import {getHomeData} from '@src/redux/actions/home/homeAction';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

export const SearchView = ({...props}) => {
  const dispatch = useDispatch();

  const onSubmitEditing = event => {
    dispatch(getHomeData({keyword: event.nativeEvent.text}));
  };

  return (
    <View style={styles.container}>
      <SearchComponent
        onSubmitEditing={onSubmitEditing}
        containerStyle={styles.inputContainerStyle}
        placeholder={'Search'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(5),
  },
  inputContainerStyle: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: hp(5),
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
});
