// navigation.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Intro from "../screens/Intro";
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {


    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />

        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
