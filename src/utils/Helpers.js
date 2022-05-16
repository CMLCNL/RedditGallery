import {Platform} from 'react-native';

export const isEmpty = value => {
  return (
    value == null || // Check for null or undefined
    value == undefined || // Check for null or undefined
    value == 'null' || // Check for null or undefined
    value == 'undefined' || // Check for null or undefined
    value.length === 0 || // Check for empty String (Bonus check for empty Array)
    (typeof value === 'object' && Object.keys(value).length === 0) // Check for empty Object or Array
  );
};

export const replaceAmpersand = str => {
  return !isEmpty(str) ? str.replace(/&amp;/g, '&') : '';
};

export const isAndroid = () => {
  return Platform.OS === 'android';
};
