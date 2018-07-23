import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends React.Component {
    render() { 
        return(
            <View style={[{width: Dimensions.get("window").width * 0.8}, styles.container]}>
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name={Platform.OS === 'android' ? "md-log-out": "ios-log-out"} 
                            size={30} color="#aaa"
                            style={styles.drawerIconItem}/>
                        <Text> Sign Out </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "white"
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee'
    },
    drawerIconItem: {
        marginRight: 10
    }
});

export default SideDrawer;