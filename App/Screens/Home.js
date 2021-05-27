import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Add an image header and text</Text>
            </View>
        </View>
    );
}

export default HomeScreen;