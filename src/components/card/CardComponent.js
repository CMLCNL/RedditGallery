import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {wp, hp, screenWidth} from '@constants/Dimensions';
import FastImage from 'react-native-fast-image';
import {FontSize} from '@src/constants/Sizes';
import * as Animatable from 'react-native-animatable';

const CardComponent = ({uri, data, onPress}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Animatable.View animation={'zoomIn'} duration={500}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <FastImage
            source={{
              uri: uri,
            }}
            style={styles.image}
            onLoad={() => {
              setLoading(false);
            }}
          />
          <Text style={styles.title} numberOfLines={1}>
            {data.title}
          </Text>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#eb6424"
              style={styles.loading}
            />
          )}
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(1),
    marginVertical: hp(1),
  },
  image: {
    height: hp(250),
    width: wp(screenWidth / 2 + wp(10)),
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: '45%',
  },
  title: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: hp(5),
    fontSize: FontSize(12),
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  username: {
    top: 0,
    right: 0,
    position: 'absolute',
    padding: hp(3),
    fontSize: FontSize(8),
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
