import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Screen from './components/Screen';
import AllButtons from './components/AllButtons';

const App = () => {
  const [values, setValues] = useState<string>('');
  const [total, setTotal] = useState('');



  const handleCalulate = (value: string) => {

    switch (value) {
      case "C":
        setValues('');
        setTotal('')
        break;
      case "backspace":
        if (values) {
          const result = values.slice(0, values.length - 1);
          setValues(result);
        }

        if (String(total).length && !values) {
          const totalresult = String(total).slice(0, String(total).length - 1);
          setTotal(totalresult);
        }
        break;
      case "=":
        try {
          const calculateTotal = eval(values);
          setTotal(calculateTotal);
        } catch (error) {
          setTotal('error');

        }

        break;
      case '/':
      case '*':
      case '-':
      case '+':
        if(values.endsWith(value)){
          setValues(values)
        }
        else if (
          values.endsWith('/') || values.endsWith('*') || values.endsWith('+') || values.endsWith('-')
          ) {
          const removesymbol = values.slice(0, values.length - 1);
          setValues(removesymbol + value);
          
        }
        else if(total){
          setValues(total + value);
          setTotal('')
        }
        else{
          setValues(values + value)
        }


        break;

      default:
        if(total){
          setValues(total + value);
          setTotal('')
        }
        else{
          setValues(values + value)
        }
        break;
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View >
        <Screen values={values} total={total} />

        <AllButtons handleCalulate={handleCalulate} />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#000000',
    // borderWidth: 1,
    // borderColor: '#FFF'
  }
})


export default App;