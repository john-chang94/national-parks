import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../features/search/searchScreen';
import ParkDetails from '../components/parkDetails';

const Stack = createNativeStackNavigator();

export default function SearchStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
            <Stack.Screen name='ParkDetails' component={ParkDetails} />
        </Stack.Navigator>
    )
}