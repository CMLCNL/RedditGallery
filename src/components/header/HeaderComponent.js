import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {hp, wp} from '@src/constants/Dimensions';
import * as Icons from '@constants/Icons';
import BackButtonComponent from './BackButtonComponent';
import * as Animatable from 'react-native-animatable';

export const HeaderComponent = ({title, icon, backButton, ...props}) => {
  let Icon = Icons[icon];

  return (
    <SafeAreaView style={styles.container}>
      {backButton && (
        <BackButtonComponent
          containerStyle={styles.backButtonContainerStyle}
          color={'#fff'}
          iconName={'arrowLeft'}
        />
      )}
      <Animatable.View animation={'rotate'} duration={1000}>
        <View style={styles.icon}>
          <Icon fill={'#fe4500'} />
        </View>
      </Animatable.View>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fe4500',
  },
  icon: {
    padding: hp(5),
    backgroundColor: 'white',
    borderRadius: hp(30),
    marginVertical: hp(5),
  },
  title: {
    fontSize: hp(20),
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: wp(5),
  },
  backButtonContainerStyle: {
    position: 'absolute',
    left: wp(5),
    bottom: hp(10),
  },
});
