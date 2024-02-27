// CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2c3e50',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
