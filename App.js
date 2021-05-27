import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App/Screens/Home';
import EventDetailsScreen from './App/Screens/EventDetails';
import type { Node } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

const Stack = createStackNavigator();

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={EventDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
