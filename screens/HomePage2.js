import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomePage2({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomePage3'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000',
  },
});
