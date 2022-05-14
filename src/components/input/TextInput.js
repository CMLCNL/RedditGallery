import {FontSize} from '@constants/Sizes';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {hp, wp} from '@constants/Dimensions';
import {isEmpty} from '@src/utils/Helpers';
const CustomTextInput = props => {
  const {
    id,
    refInput,
    placeholder,
    style,
    leftSide,
    rightSide,
    onValueChange,
    value,
    email,
    min,
    max,
    required,
    minLength,
    autoCapitalize = 'none',
    extra,
    keyboardType,
    isNumber,
    keyboardKeyType,
    onKeyPress,
    onSubmitEditing,
    multiline,
    maxLength,
    textLength,
    inputStyle,
    testID,
  } = props;
  const textChangeHandler = text => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const numberRegex = /^[0-9\b]+$/;
    let isValid = true;
    let numberPass = true;
    if (required && text.trim().length === 0) {
      isValid = false;
      numberPass = true;
    }
    if (email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
      numberPass = true;
    }
    if (isNumber && !numberRegex.test(text.toLowerCase())) {
      isValid = false;
      numberPass = false;
    }
    if (+text < 1) {
      numberPass = true;
      isValid = false;
    }
    if (min != null && +text < min) {
      numberPass = true;
      isValid = false;
    }
    if (max != null && +text > max) {
      numberPass = true;
      isValid = false;
    }
    if (minLength != null && text.length < minLength) {
      numberPass = true;
      isValid = false;
    }
    if (textLength != null && text.length !== textLength) {
      numberPass = true;
      isValid = false;
    }
    if (!numberPass) {
      const change = text.substr(0, text.length - 1);
      const texts = extra !== undefined ? extra + change : change;
      onValueChange(id, texts, isValid);
      setCurrentValue(text);
      setValid(isValid);
    } else if (extra !== undefined) {
      onValueChange(id, extra + text, isValid);
      setCurrentValue(text);
      setValid(isValid);
    } else {
      onValueChange(id, text, isValid);
      setCurrentValue(text);
      setValid(isValid);
    }
  };
  const [showStatus, setShowStatus] = useState(false);
  const [valid, setValid] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

  return (
    <View
      style={[
        styles.container,
        style,
        {
          borderColor:
            currentValue.length === 0 || valid || !showStatus ? 'gray' : 'red',
        },
      ]}>
      {leftSide}
      <TextInput
        ref={refInput}
        onFocus={() => setShowStatus(false)}
        onBlur={() => setShowStatus(true)}
        testID={testID}
        multiline={multiline}
        onSubmitEditing={onSubmitEditing ? onSubmitEditing : null}
        autoCapitalize={autoCapitalize}
        onKeyPress={onKeyPress ? onKeyPress : null}
        autoCorrect={false}
        value={value}
        onChangeText={!isEmpty(onValueChange) ? textChangeHandler : null}
        placeholder={placeholder}
        returnKeyType={!isEmpty(keyboardKeyType) ? keyboardKeyType : null}
        placeholderTextColor={'gray'}
        keyboardType={!isEmpty(keyboardType) ? keyboardType : null}
        maxLength={maxLength}
        style={[styles.inputStyle, inputStyle]}></TextInput>
      {rightSide}
      {currentValue.length !== 0 &&
        !rightSide &&
        valid &&
        required &&
        showStatus && (
          <SuccessIcon
            style={styles.icon}
            width={22}
            height={22}
            color={'blue'}
          />
        )}
      {currentValue.length !== 0 &&
        !rightSide &&
        !valid &&
        required &&
        showStatus && (
          <ErrorIcon
            style={styles.icon}
            width={22}
            height={22}
            color={Colors.red}
          />
        )}
      {currentValue.length !== 0 && !valid && showStatus && (
        <Text style={styles.warningText}>
          Please enter a valid {placeholder.toLowerCase()}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  container: {
    height: hp(52),
    borderRadius: hp(2),
    borderWidth: wp(1),
    justifyContent: 'center',
    paddingLeft: wp(17),
  },
  inputStyle: {
    color: 'black',
    fontWeight: '600',
    fontSize: FontSize(17),
  },
  icon: {
    position: 'absolute',
    backgroundColor: 'white',
    right: wp(10),
  },
  warningText: {
    width: wp(354),
    marginTop: hp(5),
    color: 'red',
    fontWeight: '600',
    position: 'absolute',
    bottom: hp(-25),
  },
});
