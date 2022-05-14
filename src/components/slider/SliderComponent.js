import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {wp, hp, screenWidth as width} from '@constants/Dimensions';
import {FontSize} from '@constants/Sizes';
import {isEmpty, replaceAmpersand} from '@src/utils/Helpers';
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';

const height = hp(400);

const Slider = ({data}) => {
  const noticesRef = useRef();
  const [activeSlider, setActiveSlider] = useState(0);

  handleActiveSlider = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeSlider) {
      setActiveSlider(slide);
    }
  };

  if (isEmpty(data)) return <></>;
  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          ref={noticesRef}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          onScroll={handleActiveSlider}
          scrollEventThrottle={16}>
          {Object.keys(data).map((key, index) => (
            <ImageBackground
              key={index}
              source={{
                uri: replaceAmpersand(data[key]?.s?.u),
              }}
              blurRadius={20}>
              <FastImage
                source={{
                  uri: replaceAmpersand(data[key]?.s?.u),
                }}
                style={styles.image}
                resizeMode={'contain'}
              />
            </ImageBackground>
          ))}
        </ScrollView>
      </View>
      <View style={styles.pagination}>
        {Object.keys(data).map((key, index) => (
          <Text
            key={index}
            style={
              activeSlider === index
                ? styles.paginationActiveDot
                : styles.paginationDot
            }>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width, height},
  scroll: {width, height},
  image: {
    width,
    height,
  },
  pagination: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(15),
    bottom: hp(10),
  },
  paginationDot: {fontSize: FontSize(6), color: 'gray', margin: wp(3)},
  paginationActiveDot: {
    fontSize: FontSize(6),
    color: 'white',
    margin: wp(3),
  },
});

export default Slider;
