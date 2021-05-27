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
import Entypo from "react-native-vector-icons/Entypo";

var dataObjects = [
  {
    id: 0,
    VenueName: "Red Rocks Performing Arts Center",
    CityState: "George, WA",
    Address: "754 Silica Rd NW, George, WA 98848",
    HotelImg: Images.hotel_ic_four,
  },
  {
    id: 1,
    VenueName: "Saratoga Springs Performing Arts Center",
    CityState: "George, WA",
    Address: "754 Silica Rd NW, George, WA 98848",
    HotelImg: Images.hotel_three,
  },
  {
    id: 2,
    VenueName: "Gorge Amphitheatre",
    CityState: "George, WA",
    Address: "754 Silica Rd NW, George, WA 98848",
    HotelImg: Images.hotel_ic_three,
  },
  {
    id: 3,
    VenueName: "Wrigley Field",
    CityState: "George, WA",
    Address: "754 Silica Rd NW, George, WA 98848",
    HotelImg: Images.hotel_one,
  },
];

export default class TagHotel extends Component {
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
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: Metrics.HEIGHT * 0.03,
                    }}
                  >
                    <Image source={item.HotelImg} style={styles.HotelImg} />

                    <View>
                      <Text style={styles.HotelNameText}>{item.VenueName}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: Metrics.HEIGHT * 0.01,
                        }}
                      >
                        <Image source={Images.googlemaps} style={styles.LocationPin} />
                        <Text style={styles.LocationText}>
                          {item.CityState}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.RatingText}>{item.Address}</Text>
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
