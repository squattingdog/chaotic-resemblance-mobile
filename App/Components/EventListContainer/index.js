import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { Container } from "native-base";
import { Metrics, Images } from "../../Themes";
import styles from "./styles";
import Venues from "./venues";

var dataObjects = [
  {
    id: 0,
    VenueName: "Red Rocks Amphitheatre",
    CityState: "Morrison, CO",
    Date: "8-30-2021",
    VenueImg: Images.redrocks,
  },
  {
    id: 1,
    VenueName: "Saratoga Springs Performing Arts Center",
    CityState: "Saratoga Springs, NY",
    Date: "10-30-2021",
    VenueImg: Images.spac,
  },
  {
    id: 2,
    VenueName: "Gorge Amphitheatre",
    CityState: "George, WA",
    Date: "11-5-2021",
    VenueImg: Images.gorge,
  },
  {
    id: 3,
    VenueName: "The Hollywood Bowl",
    CityState: "Los Angeles, CA",
    Date: "12-2-2021",
    VenueImg: Images.hollywood,
  },
];

export default class EventListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#263238" }}>
        <View style={styles.mainViewContent}>
          <ScrollView>
            {dataObjects.map((item, index) => {
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
                        style={{
                          flexDirection: "row",
                          marginLeft: Metrics.HEIGHT * 0.01,
                        }}>
                        <Image source={Images.googlemaps} style={styles.LocationPin} />
                        <Text style={styles.LocationText}>
                          {item.CityState}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row",
                          marginLeft: Metrics.HEIGHT * 0.015, }}>
                      <Image source={Images.calendar} style={styles.Calendar} />
                        <Text style={styles.CalendarText}>{item.Date}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          width: Metrics.WIDTH * 0.5,
                          marginLeft: Metrics.WIDTH * 0.02,
                          marginTop: Metrics.WIDTH * 0.01
                        }}>
                        <Button
                          title="Buy Tickets"
                          color="#8b0e0e"
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
