import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const AllButtons = ({ handleCalulate }:any) => {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <TouchableOpacity
                onPress={()=> handleCalulate("C")}
                    style={[styles.button, { borderTopLeftRadius: 12, backgroundColor: '#191717' }]}
                >
                    <Text style={styles.text}>C</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> handleCalulate("7")}
                 style={styles.button}
                 >
                    <Text style={styles.text}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("4")}
                style={styles.button}
                >
                    <Text style={styles.text}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("1")}
                style={styles.button}
                >
                    <Text style={styles.text}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> handleCalulate("%")}
                style={styles.button}
                >
                    <Text style={styles.text}>%</Text>
                </TouchableOpacity>
            </View>




            <View style={styles.column}>
                <TouchableOpacity 
                onPress={()=> handleCalulate("/")}
                style={[styles.button, { backgroundColor: '#191717' }]}
                >
                    <Text style={styles.text}>÷</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> handleCalulate("8")}
                style={styles.button}
                >
                    <Text style={styles.text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("5")}
                style={styles.button}
                >
                    <Text style={styles.text}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("2")}
                style={styles.button}
                >
                    <Text style={styles.text}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("0")}
                style={styles.button}
                >
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.column}>
                <TouchableOpacity 
                onPress={()=> handleCalulate("*")}
                style={[styles.button, { backgroundColor: '#191717' }]}
                >
                    <Text style={styles.text}>x</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("9")}
                style={styles.button}
                >
                    <Text style={styles.text}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("6")}
                style={styles.button}
                >
                    <Text style={styles.text}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("3")}
                style={styles.button}
                >
                    <Text style={styles.text}>3</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> handleCalulate(".")}
                 style={styles.button}
                 >
                    <Text style={styles.text}>.</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.column}>
                <TouchableOpacity 
                onPress={()=> handleCalulate("backspace")}
                style={[styles.button, { borderTopEndRadius: 12, backgroundColor: '#331D2C' }]}
                >
                    <Text style={styles.text}><Icon name='backspace-outline' size={36} /></Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("-")}
                style={[styles.button, { backgroundColor: '#331D2C' }]}
                >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("+")}
                style={[styles.button, { backgroundColor: '#331D2C' }]}
                >
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> handleCalulate("=")}
                style={[styles.button, styles.bigButton]}
                >
                    <Text style={styles.text}>=</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 1,
        flex: 7,
    },
    column: {
        flex: 1,
        gap: 1,
    },
    button: {
        backgroundColor: '#040D12',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '700',
    },
    bigButton: {
        flex: 2,
        backgroundColor: '#331D2C'
    },
})

export default AllButtons;