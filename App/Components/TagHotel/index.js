import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Image,
  Easing,
} from "react-native";
import { Header, Left, Right, Body, Container } from "native-base";
import { Metrics, Images } from "../../Themes";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Rating from "react-native-rating";

var dataObjects = [
  {
    id: 0,
    HotelName: "Pear Tree Hotell",
    HotelPrice: "$ 7665",
    HotelImg: Images.hotel_ic_four,
  },
  {
    id: 1,
    HotelName: "Hilton Hotel & Resort",
    HotelPrice: "$ 524",
    HotelImg: Images.hotel_three,
  },
  {
    id: 2,
    HotelName: "San Francisco",
    HotelPrice: "$ 1,289",
    HotelImg: Images.hotel_ic_three,
  },
  {
    id: 3,
    HotelName: "Kempinski Hotel CA",
    HotelPrice: "$ 987",
    HotelImg: Images.hotel_one,
  },
];

export default class TagHotel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardnumber: "008 7906 5800 4444",
      cardholdername: "Martina Breslin",
      expdate: "04/16",
      ccv: "123",
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("FirstScreen");
    return true;
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#263238" }}>
        <Header style={styles.HeaderBg} transparent>
          <Left style={styles.left}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("FirstScreen")}
            >
              <Entypo name="chevron-thin-left" color="#FFFFFF" size={25} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Image
              style={{
                height: Metrics.WIDTH * 0.1,
                width: Metrics.WIDTH * 0.1,
                marginLeft: Metrics.WIDTH * 0.03,
                marginRight: Metrics.WIDTH * 0.05,
                resizeMode: "contain",
              }}
              source={Images.beliconheader}
            />
            <Text style={styles.headertitle}>Hilton Hotel & Resort</Text>
          </Body>
          <Right style={styles.right} />
        </Header>

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
                      <Text style={styles.HotelNameText}>{item.HotelName}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: Metrics.HEIGHT * 0.01,
                        }}
                      >
                        <Entypo name="location-pin" size={14} color="#7cb342" />
                        <Text style={styles.LocationText}>
                          San Francisco, CA
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Rating
                          initial={5}
                          onChange={(rating) => console.log(rating)}
                          selectedStar={Images.starFilled1}
                          config={{
                            easing: Easing.inOut(Easing.ease),
                            duration: 350,
                          }}
                          stagger={80}
                          maxScale={2.4}
                          starStyle={[
                            styles.ratingStar,
                            { alignSelf: "center" },
                          ]}
                          editable={false}
                        />
                        <Text style={styles.RatingText}>Rating</Text>
                        <Text style={styles.RatingCountText}>85 of 100</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          width: Metrics.WIDTH * 0.3,
                        }}
                      >
                        {item.id == 0 ? (
                          <View style={{ flexDirection: "row" }}>
                            <Text style={styles.CheckedPriceText}>$ 1,098</Text>
                          </View>
                        ) : null}

                        {item.id == 1 ? (
                          <View style={{ flexDirection: "row" }}>
                            <Text style={styles.CheckedPriceText}>$ 1,098</Text>
                          </View>
                        ) : null}
                        <Text style={styles.RatingHotelNameText}>
                          {item.HotelPrice}
                        </Text>
                      </View>

                      <View style={{ width: Metrics.WIDTH * 0.3 }}>
                        <Text style={styles.AvgNightText}>AVG/NIGHT</Text>
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
