import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Images, Metrics } from '../../Themes';

const Header = () => {
    return (
        <View>
            <Image style={styles.logo} source={Images.headerLogo} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: 620,
        height: 130
    },
    logo: {
        height: Metrics.HEIGHT * 0.25,
        width: Metrics.WIDTH
    }
});


export default Header;
