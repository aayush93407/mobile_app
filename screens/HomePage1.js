import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomePage1({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomePage2'); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/image.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        The first rechargeable battery was invented in 1859
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '20%', 
    height: '30%',
  },
  text: {
    position: 'absolute',
    width: '70%', 
    height: '10%',
    left: '14%',
    top: '64%',
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#808080',
  },
});

