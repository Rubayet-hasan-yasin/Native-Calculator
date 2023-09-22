import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const AllButtons = () => {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <TouchableOpacity style={[styles.button, {borderTopLeftRadius: 12, backgroundColor: '#191717'}]}>
                    <Text style={styles.text}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>%</Text>
                </TouchableOpacity>
            </View>




            <View style={styles.column}>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#191717'}]}>
                    <Text style={styles.text}>÷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.column}>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#191717'}]}>
                    <Text style={styles.text}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>.</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.column}>
                <TouchableOpacity style={[styles.button,{borderTopEndRadius: 12, backgroundColor: '#331D2C'}]}>
                    <Text style={styles.text}><Icon name='backspace-outline' size={36}/></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#331D2C'}]}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#331D2C'}]}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.bigButton]}>
                    <Text style={styles.text}>=</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: '70%',
        flexDirection: 'row',
        gap: 1,
    },
    column:{
        width: "24.83%",
        gap: 1,
    },
    button:{
        backgroundColor: '#040D12',
        alignItems: 'center',
        justifyContent: 'center',
        height: '19.84%',
    },
    text:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: '700',
    },
    bigButton:{
        height: '39.84%',
        backgroundColor: '#331D2C'
    },
})

export default AllButtons;