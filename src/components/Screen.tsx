import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Screen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>odddsdfasdf</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: '30%',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        color: '#FFF',
        fontSize: 30,
    }
})

export default Screen;