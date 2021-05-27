import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Button
                    title="Go to Event Details"
                    onPress={() => navigation.navigate('Details')} />
            </View>
        </View>
    );
}

export default HomeScreen;