//CustomFooter.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomFooter = () => {
  return (
    <View style={styles.footer}>
      <Text>© 2024 My App. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
});

export default CustomFooter;
