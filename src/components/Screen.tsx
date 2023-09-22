import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Screen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>50+6</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        height: '30%',
        borderBlockColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
    },
    text:{
        color: '#FFF',
        fontSize: 50,

    }
})
export default Screen;