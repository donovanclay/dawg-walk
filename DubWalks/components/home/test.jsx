import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import MapComponent from '../Map/map';
import API_KEY from '../../config';
import MapView from "react-native-maps";

const HomePage = () => {
  return (
    <View style={styles.iphonePro}>
      <View style={styles.div}>
        <View style={styles.group}>
          <View style={styles.overlapGroup}>
            <View style={styles.rectangle} />
            <Text style={styles.textWrapper}>Pair me</Text>
          </View>
        </View>
        <View style={styles.mapContainer}>
            <MapComponent />
        </View>
        <View style={styles.overlapWrapper}>
          <View style={styles.overlap}>
            <Text style={styles.textWrapper2}>Make a schedule</Text>
          </View>
        </View>
        <View style={styles.overlapGroupWrapper}>
          <View style={styles.overlap2}>
            <Image source={require('./waiting-room-1.png')} style={styles.waitingRoom} />
            <Text style={styles.textWrapper3}>29</Text>
          </View>
        </View>
        <View style={styles.overlap3}>
          <View style={styles.rectangle2} />
          <Text style={styles.enterLocation}>Enter location</Text>
        </View>
        <View style={styles.overlap4}>
          <View style={styles.divWrapper}>
            <View style={styles.overlap5}>
              <Image source={require('./placeholder-1.png')} style={styles.placeholder} />
              <Text style={styles.textWrapper4}>You</Text>
              <Image source={require('./user-2.png')} style={styles.user} />
              <Text style={styles.textWrapper5}>Destination</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphonePro: {
    backgroundColor: '#fcf5bb',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#fcf5bb',
    height: 852,
    position: 'relative',
    width: 393,
  },
  group: {
    height: 109,
    left: 15,
    position: 'absolute',
    top: 728,
    width: 365,
  },
  overlapGroup: {
    height: 109,
    position: 'relative',
    width: 363,
    top: -75,
  },
  rectangle: {
    backgroundColor: '#bc57ec',
    borderRadius: 27,
    shadowColor: '#00000040',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    height: 70,
    left: 6,
    position: 'absolute',
    top: 0,
    width: 350,
  },
  textWrapper: {
    color: '#242121',
    fontSize: 30,
    fontWeight: '900',
    height: 81,
    left: 0,
    letterSpacing: 3,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 14,
    width: 363,
  },
  overlapWrapper: {
    flex: 1,
    height: 74,
    left: 21,
    position: 'absolute',
    top: 572,
    width: 352,
    backgroundColor: '#e9c2fb',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlap: {
    // You can set the background image using ImageBackground component.
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 82,
    left: -4,
    position: 'relative',
    width: 358,

  },
  textWrapper2: {
    flex: 1,
    color: '#242222',
    fontSize: 25,
    fontWeight: '900',
    height: 74,
    left: 4,
    letterSpacing: 2.5,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 20,
    width: 350,
  },
  overlapGroupWrapper: {
    height: 46,
    left: 272,
    position: 'absolute',
    top: 425,
    width: 101,
  },
  overlap2: {
    height: 54,
    left: -4,
    position: 'relative',
    width: 103,
  },
  waitingRoom: {
    height: 54,
    left: 0,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    width: 54,
  },
  textWrapper3: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '900',
    height: 46,
    left: 50,
    letterSpacing: 0,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    top: 0,
    width: 53,
  },
  overlap3: {
    height: 56,
    left: 15,
    position: 'absolute',
    top: 500,
    width: 356,
  },
  rectangle2: {
    backgroundColor: '#f6f6f6',
    borderRadius: 21,
    shadowColor: '#00000040',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    height: 55,
    left: 6,
    position: 'absolute',
    alignContent: 'center',
    top: 1,
    width: 350,
  },
  enterLocation: {
    color: '#999999',
    fontSize: 30,
    fontWeight: '400',
    height: 55,
    left: 20,
    right: 30,
    letterSpacing: 0,
    // lineHeight: 'normal',
    position: 'absolute',
    alignContent: 'center',
    top: 10,
    bottom: -20,
    width: 350,
  },
  overlap4: {
    height: 463,
    left: 21,
    position: 'absolute',
    top: 38,
    width: 354,
  },
  divWrapper: {
    height: 403,
    left: 0,
    position: 'absolute',
    top: 60,
    width: 354,
  },
  overlap5: {
    // You can set the background image using ImageBackground component.
    height: 411,
    left: -4,
    position: 'relative',
    width: 358,
  },
  placeholder: {
    height: 29,
    left: 94,
    resizeMode: 'cover',
    position: 'absolute',
    top: 174,
    width: 30,
  },
  textWrapper4: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '900',
    height: 17,
    left: 268,
    letterSpacing: 1,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 215,
    width: 41,
  },
  user: {
    height: 35,
    left: 271,
    resizeMode: 'cover',
    position: 'absolute',
    top: 232,
    width: 36,
  },
  textWrapper5: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '900',
    height: 16,
    left: 75,
    letterSpacing: 1,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 158,
    width: 69,
  },
  group2: {
    height: 74,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 352,
  },
  textWrapper6: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '900',
    height: 74,
    left: 0,
    letterSpacing: 3,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: 350,
  },
  mapContainer: {
    flex: 1,
    right: -20,
    bottom: -10,
  },
});

export default HomePage;