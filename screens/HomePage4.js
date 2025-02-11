import React, { useState, useRef, useEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function HomePage4({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);


  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  
  const [timer, setTimer] = useState(120);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  const handleSubmit = () => {
    navigation.navigate('HomePage5'); 
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

      <View style={styles.dialogBox}>
        <Text style={styles.otpText}>OTP</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              value={digit}
              onChangeText={value => handleOtpChange(index, value)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>

    
        <View style={styles.resendContainer}>
          <Text style={styles.timerText}>{timer} sec</Text>
          <TouchableOpacity disabled={timer > 0} onPress={() => setTimer(120)}>
            <Text style={[styles.resendText, timer > 0 && styles.disabledResend]}>resend</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  logoContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -50 },
  logo: { width: 180, height: 80 },
  dialogBox: {
    position: 'absolute',
    width: '89%',
    height: '40%',
    left: '5%',
    bottom: 0,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 20,
    alignItems: 'flex-start',
  },
  otpText: { fontSize: 20, color: '#fff', fontFamily: 'PublicSans-Regular', marginBottom: 15 },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' },
  otpInput: {
    width: '15%',
    height: '90%',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  resendContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start', 
    marginTop: 15,
  },
  timerText: { fontSize: 14, color: '#ccc', marginBottom: 5 },
  resendText: { fontSize: 14, color: '#fff', fontWeight: 'bold' },
  disabledResend: { color: '#666' },
  button: {
    alignSelf: 'flex-start', 
    width: '40%',
    height: '15%',
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#000' },
});
