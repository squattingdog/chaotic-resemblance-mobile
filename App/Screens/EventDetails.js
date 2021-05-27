import React from 'react';
import { Text, View } from 'react-native';
import TagHotel from './../Components/TagHotel';

const EventDetailsScreen = function EventDetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TagHotel></TagHotel>
        </View>
    );
}

export default EventDetailsScreen;