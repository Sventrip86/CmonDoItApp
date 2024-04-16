import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text } from "react-native-paper";


const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Welcome</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    // some styles
    title: {
        fontSize: 30
    }
})

export default HomeScreen