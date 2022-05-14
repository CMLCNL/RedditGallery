import {useRoute} from '@react-navigation/native';
import {hp, screenWidth, wp} from '@src/constants/Dimensions';
import {FontSize} from '@src/constants/Sizes';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import * as Icons from '@constants/Icons';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import {isEmpty} from '@src/utils/Helpers';

const DetailView = () => {
  const route = useRoute();
  const [data, setData] = useState({});
  const {homeData} = useSelector(state => state.home);

  let CommentIcon = Icons['comment'];
  let LikeIcon = Icons['like'];
  let RedditIcon = Icons['reddit'];

  useEffect(() => {
    const data = homeData[route?.params?.index];
    setData(data?.data);
  }, []);

  return (
    <Animatable.View animation={'slideInUp'} duration={500}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data?.title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <View style={styles.usernameContainer}>
              <RedditIcon width={wp(22)} fill={'#fe4500'} />
              <Text style={styles.username}>{data?.author}</Text>
            </View>
            <Text style={styles.postDate}>
              {moment(data?.created * 1000).fromNow()}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <LikeIcon width={wp(22)} fill={'#ff4d6d'} />
            <Text style={styles.texts}>{data?.ups}</Text>
            <CommentIcon width={wp(22)} fill={'gray'} />
            <Text style={styles.texts}>{data?.num_comments}</Text>
          </View>
        </View>
        {!isEmpty(data?.selftext) && (
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>{data?.selftext}</Text>
          </View>
        )}
      </View>
    </Animatable.View>
  );
};

export default DetailView;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(20),
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: hp(10),
    borderRadius: hp(10),
    width: wp(screenWidth - wp(20)),
  },
  title: {
    color: 'black',
    fontSize: FontSize(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: hp(5),
    borderRadius: hp(10),
    marginVertical: hp(10),
    width: wp(screenWidth - wp(20)),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    color: 'gray',
    marginHorizontal: wp(8),
  },
  username: {
    padding: hp(3),
    fontSize: FontSize(14),
    fontWeight: 'bold',
    color: '#00000095',
    fontStyle: 'italic',
  },
  postDate: {
    padding: hp(3),
    fontSize: FontSize(14),
    fontWeight: 'bold',
    color: '#00000095',
    fontStyle: 'italic',
  },
  paragraphContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.06)',
    borderRadius: hp(10),
    padding: hp(5),
  },
  paragraph: {
    marginVertical: hp(10),
    width: wp(screenWidth - wp(20)),
  },
});
