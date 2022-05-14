import {useRoute} from '@react-navigation/native';
import {HeaderComponent} from '@src/components/header/HeaderComponent';
import Slider from '@src/components/slider/SliderComponent';
import {isEmpty} from '@src/utils/Helpers';
import DetailView from '@src/views/detail/DetailView';
import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {hp} from '@src/constants/Dimensions';
import ImageView from '@src/views/detail/ImageView';

const DetailScreen = ({}) => {
  const route = useRoute();

  const [data, setData] = useState([]);
  const {homeData} = useSelector(state => state.home);

  useLayoutEffect(() => {
    const data = homeData[route?.params?.index];
    setData(data);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComponent backButton title={'Reddit Gallery'} icon={'reddit'} />
      {!isEmpty(data?.gallery) && <Slider data={data?.gallery} />}
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        {isEmpty(data?.gallery) && !isEmpty(data) && <ImageView />}
        <DetailView />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp(150),
  },
});

export default DetailScreen;
