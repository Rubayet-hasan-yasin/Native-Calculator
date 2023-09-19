import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AllButtons = () => {
    return (
         <View style={styles.container}>
            <Text style={styles.text}>oddd</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
       height : "70%",
       borderColor: '#fff',
       borderWidth: 2
    },
    text: {
        color: '#fff'
    }
})

export default AllButtons;