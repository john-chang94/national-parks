import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../features/account/account';
import ParkDetails from '../components/parkDetails';

const Stack = createNativeStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AccountScreen' component={AccountScreen} />
        </Stack.Navigator>
    )
}