//HomeScreen.js
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import CustomHeader from '../components/CustomHeader'
import CustomFooter from '../components/CustomFooter'
import CustomAlert from '../components/CustomAlert'
import CustomLoader from '../components/CustomLoader'
const HomeScreen = () => {
    const [textValue, setTextValue] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const handleButtonPress = () => {
        console.log('Button pressed!');
        setShowLoader(true);
        // Simulate an asynchronous operation (e.g., API call) that takes some time
        setTimeout(() => {
          setShowLoader(false);
          setShowAlert(true);
        }, 2000);
      };
    const closeAlert = () => {
        // Close the alert
        setShowAlert(false);
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <CustomHeader title="My App" />
            </View>
            <View style={{ flex: 1, padding: 16}}>
                <CustomTextInput
                    placeholder="Enter text here"
                    value={textValue}
                    onChangeText={(text) => setTextValue(text)}
                />
                <CustomButton onPress={handleButtonPress} title="Press Me" />
            </View>
            {showAlert && (
                <CustomAlert
                    message="Please Input!"
                    onClose={closeAlert}
                />
            )}
            {showLoader && <CustomLoader />}
            <CustomFooter />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})