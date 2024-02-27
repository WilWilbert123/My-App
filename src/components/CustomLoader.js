// CustomLoader.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const CustomLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#0066cc" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomLoader;
