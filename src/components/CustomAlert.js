// CustomAlert.js
import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomAlert = ({ message, onClose }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      onClose();
    });
  };

  return (
    <Animated.View
      style={[
        styles.alertContainer,
        {
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 1],
                outputRange: [300, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.alertMessage}>{message}</Text>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <MaterialIcons name="close" size={24} color="#0066cc" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertMessage: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginLeft: 10,
  },
});

export default CustomAlert;
