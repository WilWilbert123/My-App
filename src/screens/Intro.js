import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Intro = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/a.jpg')} 
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover',
  },
});

export default Intro;
