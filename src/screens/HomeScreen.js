import React, {useEffect} from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getHomeData} from '@src/redux/actions/home/homeAction';
import CardComponent from '@src/components/card/CardComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import {SearchView} from '@src/views/home/SearchView';
import {hp} from '@src/constants/Dimensions';
import {HeaderComponent} from '@src/components/header/HeaderComponent';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '@src/constants/PageEnum';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {homeData} = useSelector(state => state.home);

  useEffect(() => {
    dispatch(getHomeData({keyword: 'travel'}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title={'Reddit Gallery'} icon={'reddit'} />
      <Animatable.View duration={500} animation={'zoomIn'}>
        <SearchView />
        <FlatList
          data={homeData}
          numColumns={2}
          renderItem={({item, index}) => (
            <CardComponent
              key={index}
              onPress={() =>
                navigation.navigate(SCREENS.DetailScreen, {
                  index: index,
                })
              }
              uri={item?.imageUrl}
              data={item?.data}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={() => <Text>{'nothing...'}</Text>}
          initialNumToRender={6}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingBottom: hp(150),
  },
});

export default HomeScreen;
