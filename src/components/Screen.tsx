import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


type ScreenProps = {
    values: string,
    total: string
}


const Screen = ({ values, total }: ScreenProps) => {
    return (

        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.text}>{values}</Text>
                {total !== '' && <Text style={styles.text}>={total}</Text>}
            </ScrollView>
        </View>

    );
};



const styles = StyleSheet.create({
    container: {
        // height: '30%',
        flex: 3,
        backgroundColor: '#000',
    },
    scrollContainer: {
        minHeight: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    text: {
        color: '#FFF',
        fontSize: 50,

    }
})
export default Screen;