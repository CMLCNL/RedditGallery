import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const ImageView = ({}) => {
  const route = useRoute();

  return (
    <Animatable.View animation={'zoomIn'} duration={500}>
      <ImageBackground
        source={{
          uri: replaceAmpersand(homeData[route?.params?.index]?.imageUrl),
        }}
        blurRadius={20}>
        <FastImage
          source={{
            uri: replaceAmpersand(homeData[route?.params?.index]?.imageUrl),
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
});

export default ImageView;
