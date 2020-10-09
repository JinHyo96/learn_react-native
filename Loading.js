import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return (
    <View style = {styles.contanier}>
        <StatusBar barStyle="dark-content"/>
        <Text style = {styles.text}>Getting the weather</Text>
    </View>
    );
}

// css라고 보면 됨
// react native 에서는 flex로 레이아웃 코딩을 권장함
const styles = StyleSheet.create({
    contanier: {
        flex : 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text:{
        color: "#2c2c2c",
        fontSize: 30
    }
})