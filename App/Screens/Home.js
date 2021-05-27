import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/Header/Header';

const HomeScreen = function HomeScreen({ navigation }) {
    return (
        <View style={styles.sheet}>
            <Header />
            <ScrollView>
                <Text style={styles.contentBody}>Chaotic Resemblance formed back in 2006 in Poteau, Oklahoma by Vocalist-Travis McConnell. Chaotic Resemblance is a Heavy Metal band, in the veins of Skid Row, that adds spice to their arrangements by incorporating touches of 80's style Glam Metal. When it comes to the meaning behind the band's moniker the band states:  "Our band name is based off of Isaiah 40:18 So who even comes close to being like God? To whom or what can you compare him? Without Him we are nothing more than a "Chaotic Resemblance" of His perfection! Because of His supreme sacrifice He made for us on Calvary's cross we want everything we do, every song we play to glorify our Lord & Savior Jesus Christ."</Text>
                <Text style={styles.contentBody}>The band has opened for such acts as P.O.D. Y&T, Stryper, Disciple, Children 18:3, Rapture Ruckus, Petra, White Cross, LA Guns, Stephen Pearcy of Ratt, Mike Tramp (White Lion), Bobby Blotzer RATT Experience, Enuff Z' Nuff, Devil City Angels, BLOODGOOD, Faster Pussycat, Oz Fox of Stryper and even toured with Hip Hop Icon Kurtis Blow. They have shared the stage with Thousand Foot Krutch, Seventh Day Slumber, KUTLESS, Since October, Stellar Kart, Kix, Queensryche The Wedding, PM Today & Project86. ​</Text>
                <Text style={styles.contentBody}>To the band's credit they already have released 2-EPs and 2-full-length albums. In 2012 they released their self-titled EP 'Chaotic Resemblance' and in 2013 they released a second EP titled 'Battle Lines'. Then in the summer of 2014, Oz Fox lent a helping hand and produced the band's full-length debut album titled 'Get The Hell Out'. The line-up for their 2014 debut was comprised of Vocalist/Bassist-Travis McConnell, Guitarist-L/A Ellis, Drummer-Zak Fury along with Oz Fox on lead guitar and Sam McCaslin on Keyboards.</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contentBody: {
        padding: 15,
        fontSize: 16,
        color: '#fff'
    },
    sheet: {
        backgroundColor: '#000'
    }
});

export default HomeScreen;
