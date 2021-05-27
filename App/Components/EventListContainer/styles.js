import { Platform, StyleSheet } from "react-native";
import { Fonts, Metrics } from "../../Themes";

const styles = StyleSheet.create({
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

  mainViewContent: {
    flex: 1,
    backgroundColor: "#fff",
  },

  VenueImg: {
    height: Metrics.HEIGHT * 0.2,
    width: Metrics.WIDTH * 0.35,
    marginTop: Metrics.HEIGHT * 0.03,
    marginLeft: Metrics.HEIGHT * 0.04,
  },

  LocationPin: {
    height: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.0513
  },

  Calendar: {
    height: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.04
  },

  VenueNameText: {
    color: "#1d262a",
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.moderateScale(18),
    marginTop: Metrics.HEIGHT * 0.03,
    marginLeft: Metrics.HEIGHT * 0.01,
    width: Metrics.WIDTH * 0.5,
  },

  LocationText: {
    color: "#1d262a",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(12),
  },

  CalendarText: {
    color: "#1d262a",
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Fonts.moderateScale(12),
    marginLeft: Metrics.HEIGHT * 0.01
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

  BorderHorizontal: {
    width: Metrics.WIDTH,
    height: 1,
    backgroundColor: "#e1e1e1",
    marginBottom: Metrics.HEIGHT * 0.01,
    marginTop: Metrics.HEIGHT * 0.01,
  },
});

export default styles;
