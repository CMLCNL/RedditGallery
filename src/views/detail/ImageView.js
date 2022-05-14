import {useRoute} from '@react-navigation/native';
import {replaceAmpersand} from '@src/utils/Helpers';
import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {hp, screenWidth} from '@src/constants/Dimensions';

const ImageView = ({}) => {
  const route = useRoute();
  const {homeData} = useSelector(state => state.home);

  return (
    <Animatable.View animation={'zoomIn'} duration={500}>
      <ImageBackground
        source={{
          uri: replaceAmpersand(homeData[route.params?.index]?.imageUrl),
        }}
        blurRadius={20}>
        <FastImage
          source={{
            uri: replaceAmpersand(homeData[route.params?.index]?.imageUrl),
          }}
          style={styles.image}
          resizeMode={'contain'}
        />
      </ImageBackground>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: hp(500),
  },
});

export default ImageView;
