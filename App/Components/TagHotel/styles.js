import { Platform, StyleSheet } from "react-native";
import { Fonts, Metrics } from "../../Themes";

const styles = StyleSheet.create({
  HeaderBg: {
    backgroundColor: "#263238",
    borderBottomWidth: 1,
  },

  left: {
    flex: 0.5,
  },

  body: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  right: {
    flex: 1,
  },

  headertitle: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(20),
    marginLeft: 10,
  },

  mainViewContent: {
    flex: 1,
    backgroundColor: "#fff",
  },

  HotelImg: {
    height: Metrics.HEIGHT * 0.2,
    width: Metrics.WIDTH * 0.35,
    marginTop: Metrics.HEIGHT * 0.03,
    marginLeft: Metrics.HEIGHT * 0.04,
  },

  HotelNameText: {
    color: "#1d262a",
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.moderateScale(18),
    marginTop: Metrics.HEIGHT * 0.03,
    marginLeft: Metrics.HEIGHT * 0.01,
    width: Metrics.WIDTH * 0.5,
  },

  ratingStar: {
    height: Metrics.HEIGHT * 0.022,
    width: Metrics.HEIGHT * 0.022,
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  LocationText: {
    color: "#1d262a",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(12),
  },

  RatingText: {
    color: "#1d262a",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(11),
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  RatingCountText: {
    color: "#6ba833",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(11),
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  CheckedPriceText: {
    color: "#7e939e",
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.LatoRegular,
    marginLeft: Metrics.HEIGHT * 0.01,
    alignSelf: "center",
    textDecorationLine: "line-through",
  },

  BorderLine: {
    backgroundColor: "#7e939e",
    height: 1,
    width: Metrics.WIDTH * 0.1,
    position: "absolute",

    ...Platform.select({
      ios: {
        top: Metrics.HEIGHT * 0.021,
      },
      android: {
        top: Metrics.HEIGHT * 0.023,
      },
    }),

    left: Metrics.HEIGHT * 0.01,
  },

  RatingHotelNameText: {
    color: "#2ea7f0",
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.moderateScale(20),
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  AvgNightText: {
    color: "#252e32",
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.LatoBold,
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  BorderHorizontal: {
    width: Metrics.WIDTH,
    height: 1,
    backgroundColor: "#e1e1e1",
    marginBottom: Metrics.HEIGHT * 0.01,
    marginTop: Metrics.HEIGHT * 0.01,
  },
});

export default styles;
