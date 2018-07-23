import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemSelected}>
        <View style={styles.listItem}>
            <Image style={styles.placeImage} source={props.placeImage}/>
            <Text> {props.placeName} </Text>     
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        margin: 8,
        height: 30,
        width: 30
    }
});

export default listItem;