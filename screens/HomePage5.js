import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';


export default function HomePage5({navigation}) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const handleProfileClick = () => {
    setShowDetails(!showDetails); 
  };
  const handleSubmit = () => {
    navigation.navigate('ticket'); 
  };
  const handleclick = () => {
    navigation.navigate('Battery_status'); 
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.username}>UserName</Text>
        </View>
        <TouchableOpacity onPress={handleProfileClick}>
        <Image source={require('../assets/images/avatar.png')} style={styles.profileIcon} />
        </TouchableOpacity>

        {showDetails&&( <View style={styles.detailsBox}>
          <Text style={styles.username}>Aayush</Text>
          <Text style={styles.phone}>+91 9980539949</Text>
        </View>)}

      </View>

      {/* Details Section */}
      <TouchableOpacity onPress={() => setDetailsVisible(!detailsVisible)} style={styles.detailsToggle}>
        <Text style={styles.detailsText}>Details</Text>
        <Text style={styles.dropdownIcon}>{detailsVisible ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {detailsVisible && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsItem}><Text style={styles.bold}>UPS model:</Text> UPS@12345</Text>
          <Text style={styles.detailsItem}><Text style={styles.bold}>Battery Units:</Text> 2</Text>
          <Text style={styles.detailsItem}><Text style={styles.bold}>Battery Model:</Text> Luminoo Battery Co. | Model AZ1234</Text>
          <Text style={styles.detailsItem}><Text style={styles.bold}>Installation Address:</Text> C-Z, Universal Location, India</Text>
        </View>
      )}

      {/* Battery & Temperature */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Image source={require('../assets/images/battery.png')} style={styles.icon} />
          <View>
            <Text style={styles.infoText}>87%</Text>
            <Text style={styles.subText}>Battery charge</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Image source={require('../assets/images/temperature.png')} style={styles.icon} />
          <View>
            <Text style={styles.infoText}>27°C</Text>
            <Text style={styles.subText}>Battery Temperature</Text>
          </View>
        </View>
      </View>

      {/* Online Status */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Current Battery</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.onlineText}>{isOnline ? 'Online' : 'Offline'}</Text>
          <Switch value={isOnline} onValueChange={setIsOnline} />
          
        </View>
      </View>

      {/* Usage Analytics */}
      <Text style={styles.analyticsHeader}>Usage Analytics</Text>
      <Text style={styles.analyticsText}>Unlock insights into energy consumption and battery usage</Text>
      <Image source={require('../assets/images/graph.png')} style={styles.usageGraph} />

      {/* Footer */}
      <TouchableOpacity style={styles.exploreButton} onPress={handleclick} >
        <Text style={styles.exploreText}>Explore →</Text>
      </TouchableOpacity>
       {/* Need Assistance */}
       <Text style={styles.sectionTitle}>Need Assistance?</Text>
      <Text style={styles.sectionDescription}>Get your queries answered and book service appointment easily</Text>
      <TouchableOpacity onPress={handleSubmit} ><Text style={styles.linkText}>Contact us →</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  phone: {
    fontSize: 14,
    color: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
  },
  linkText: {
    color: '#0f9d58',
    marginTop: 10,
  },
  sectionDescription: {
    color: '#bbb',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  detailsToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 10,
  },
  detailsText: {
    color: '#fff',
    fontSize: 16,
  },
  dropdownIcon: {
    color: '#fff',
    fontSize: 16,
  },
  detailsBox: {
    backgroundColor: '#2A2A2A',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  detailsItem: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', 
    marginTop: 20,
    paddingHorizontal: 10, 
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    
    padding: 12, // 
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    width: '20%',  
    height: 70,
    marginRight: 15,
  },
  infoText: {
    fontSize: 26,  
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    fontSize: 12,  
    color: '#ccc',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineText: {
    color: '#0f0',
    marginRight: 5,
  },
  analyticsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  analyticsText: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  usageGraph: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  exploreButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  exploreText: {
    color: '#0f0',
    fontSize: 16,
  },
});
