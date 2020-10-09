import { StatusBar } from 'expo-status-bar';

import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios"
import Weather from './Weather';

const API_KEY = "0dae83e2e5824c2d63d02c3d4a39fb5e"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) =>{
    const { data: { main: { temp }, weather }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    
    this.setState({isLoading:false, condition: weather[0].main, temp});
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("오류", "위치를 찾을 수 없습니다.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (<Loading />) : (<Weather temp={Math.round(temp)} condition={condition} />);
  }
}