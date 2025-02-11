import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, Animated } from 'react-native';

export default function HomePage3({ navigation }) {
  const [slideAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
  
    Animated.timing(slideAnim, {
      toValue: 1, 
      duration: 500, 
      useNativeDriver: true,
    }).start();
    const timeout = setTimeout(() => {
        navigation.navigate('HomePage3'); 
      }, 3000);

    return () => clearTimeout(timeout); 
  }, [navigation, slideAnim]);

  const handleSubmit=()=>{
    navigation.navigate('HomePage4');
  };

  return (
    <ImageBackground
      source={require('../assets/images/HomeScreen3.png')} 
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/taqanal.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animated.View
        style={[styles.dialogBox, {
          transform: [{ translateY: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [500, 50], 
          })}]
        }]}
      >
        <Text style={styles.signInText}>Sign in</Text>

        <Text style={styles.label}>User Name</Text>
        <TextInput style={[styles.input, { backgroundColor: '#fff' }]} placeholder="Rahul@1234" placeholderTextColor="#ccc" />


        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={[styles.input, { backgroundColor: '#fff' }]} placeholder="+91 XXXXX XXXXX" placeholderTextColor="#ccc" keyboardType="phone-pad" />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50, 
  },
  logo: {
    width: '40%',
    height: '40%',
  },
  dialogBox: {
    position: 'absolute',
    width: '90%', 
    height: '40%',
    left: '5%',
    bottom: 0,
    backgroundColor: '#1A1A1A', 
    borderRadius: 10, 
    padding: 20,
  },
  signInText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000',
    marginBottom: 15,
  },
  button: {
    width: '40%',
    height: '15%',
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
