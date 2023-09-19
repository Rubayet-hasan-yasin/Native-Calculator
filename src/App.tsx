import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Screen from './components/Screen';
import AllButtons from './components/AllButtons';

const App = () => {
  const [values, setValues] = useState('');
  const [total, setTotal] = useState('');



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <View >
        <Screen />

        <AllButtons/>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: '#000',
    flexDirection: 'column-reverse',
  }
})


export default App;