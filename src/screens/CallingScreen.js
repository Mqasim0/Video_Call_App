import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Qasim</Text>
        <Text style={styles.phoneNumber}>ringing +923222066269</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.iconButton}>
          <Icon
            name="ios-camera-reverse"
            type="ionicon"
            size={30}
            color={'white'}
          />
        </View>
        <View style={styles.iconButton}>
          <Icon
            name="camera-off"
            type="material-community"
            size={30}
            color={'white'}
          />
        </View>
        <View style={styles.iconButton}>
          <Icon
            name="microphone-off"
            type="material-community"
            size={30}
            color={'white'}
          />
        </View>
        <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
          <Icon
            name="phone-hangup"
            type="material-community"
            size={30}
            color={'white'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});

export default CallingScreen;
