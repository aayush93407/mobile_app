import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Battery_status({navigation})
{
  const [alertsVisible, setAlertsVisible] = useState(false);
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Page Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Usage Characteristics</Text>

      {/* Alerts Dropdown */}
      <TouchableOpacity onPress={() => setAlertsVisible(!alertsVisible)} style={styles.alertToggle}>
        <Text style={styles.alertText}>Alerts</Text>
        <Text style={styles.dropdownIcon}>{alertsVisible ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {alertsVisible && (
        <View style={styles.alertBox}>
          <Text style={styles.alertItem}>We are all good Houston</Text>
        </View>
      )}

      {/* Graphs Section */}
      <View style={styles.graphSection}>
        <Text style={styles.graphTitle}>Power Utilization</Text>
        <Image source={require('../assets/images/power.png')} style={styles.graphImage} />

        <Text style={styles.graphTitle}>Energy Utilization</Text>
        <Image source={require('../assets/images/energy.png')} style={styles.graphImage} />

        <Text style={styles.graphTitle}>Battery Voltage Time Chart</Text>
        <Image source={require('../assets/images/voltage.png')} style={styles.graphImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000', 
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 12,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertToggle: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertText: {
    color: '#ffffff',
    fontSize: 16,
  },
  dropdownIcon: {
    color: '#ffffff',
    fontSize: 18,
  },
  alertBox: {
    backgroundColor: '#444',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertItem: {
    color: '#666666',
    fontSize: 18,
    marginTop:40,
    marginBottom: 40,
    textAlign: 'center',
  },
  graphSection: {
    marginTop: 10,
  },
  graphTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  graphImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});


