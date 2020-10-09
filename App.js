import { StatusBar } from 'expo-status-bar';

import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios"
const API_KEY = "0dae83e2e5824c2d63d02c3d4a39fb5e"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) =>{
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("오류", "위치를 찾을 수 없습니다.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}