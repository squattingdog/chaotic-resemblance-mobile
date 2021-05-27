import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/Home';
import EventDetailsScreen from '../Screens/EventDetails';
import React from 'react';

export default function AppNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home-sharp' : 'home-outline';
                        } else if (route.name === 'Tour Dates') {
                            iconName = focused ? 'calendar-sharp' : 'calendar-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Tour Dates" component={EventDetailsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}