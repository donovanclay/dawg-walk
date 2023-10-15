import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.6546,
          longitude: -122.3075,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled = {true}
        minZoomLevel={14}
        maxZoomLevel={20}
      />
      <Marker
          coordinate={{ latitude: 47.65318, longitude: -122.30499 }}
          title={"Marker Title"}
          description={"Marker Description"}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 27,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    width: 350,
    height: 403,
    flexShrink: 0,
  },
});

export default MapComponent;
