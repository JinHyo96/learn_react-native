import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "Just dont go outside"
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Just dont go outside"
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subtitle: "지금 밖에 비오고 있는데요?"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "눈 오고 있음.. 부산이면 위험해"
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "아무말이나 적어보려고 그냥 ㅋㅋ"
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "weather-sunny weather-sunny weather-sunny weather-sunny"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "weather-cloudy weather-cloudy weather-cloudy weather-cloudy"
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "weather-hail weather-hail"
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "weather-hail weather-hail weather-hail"
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just dont go outside"
      }
  
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions["Snow"].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions["Snow"].iconName}
          color="white"/>
        <Text style={styles.temp}>{temp}°c</Text>
      </View>
      
      <View style={{...styles.halfContainer, ...styles.textContainer}} >
        <Text style={styles.title}>{weatherOptions["Snow"].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions["Snow"].subtitle}</Text>
      </View>
    </LinearGradient>
  );
  //... 두개의 오브젝트를 함께 쓰는 es6 방식
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
  //string.isrequired를 붙이면 요것은 필수적으로 있어야한다는 뜻
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle:{
    color: "white",
    fontWeight: "900",
    fontSize: 24
  },
  textContainer:{
    paddingHorizontal:20,
    alignItems: "flex-start"
  }
});