import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, SplashScreen, WelcomeScreen } from '../pages';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation