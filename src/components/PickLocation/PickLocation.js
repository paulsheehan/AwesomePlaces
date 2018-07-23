import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class PickLocation extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.placeholder}> 
                    <Text> map </Text> 
                </View>
                <View style={styles.button}> 
                    <Button title="Locate Me" onPress={() => alert("Pick Image")}> </Button>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 120
    },
    previewImage: {
        width: '100%',
        height: '100%'
    },
    button: {
        margin: 8
    }
});

export default PickLocation;