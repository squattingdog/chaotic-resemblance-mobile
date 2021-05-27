import React, { Component } from "react";
import { View, Text, ScrollView, Image, Button} from "react-native";
import { Container } from "native-base";
import { Metrics, Images, Colors } from "../../Themes";
import styles from "./styles";
import venues from "./venues";

export default class EventListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#263238" }}>
        <View style={styles.mainViewContent}>
          <ScrollView>
            {venues.map((item, index) => {
              return (
                <View key={index}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: Metrics.HEIGHT * 0.03,
                    }}>
                    <Image source={item.VenueImg} style={styles.VenueImg} />
                    <View>
                      <Text style={styles.VenueNameText}>{item.VenueName}</Text>
                      <View
                        style={styles.MapsRow}>
                        <Image source={Images.googlemaps} style={styles.LocationPin} />
                        <Text style={styles.LocationText}>
                          {item.CityState}
                        </Text>
                      </View>
                      <View style={styles.CalendarRow}>
                        <Image source={Images.calendar} style={styles.Calendar} />
                        <Text style={styles.CalendarText}>{item.Date}</Text>
                      </View>
                      <View
                        style={styles.Tickets}>
                        <Button
                          title="Buy Tickets"
                          color={Colors.red}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.BorderHorizontal} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Container>
    );
  }
}
