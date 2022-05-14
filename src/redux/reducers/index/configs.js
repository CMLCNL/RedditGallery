import AsyncStorage from '@react-native-async-storage/async-storage';

export const homePersistConfig = {
  key: 'RedditGallery_Home',
  storage: AsyncStorage,
  version: '1.0.0',
  blacklist: [],
};
