import React from 'react';
import { Text, View } from 'react-native';
import EventListContainer from './../Components/EventListContainer';

const EventDetailsScreen = function EventDetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <EventListContainer></EventListContainer>
        </View>
    );
}

export default EventDetailsScreen;