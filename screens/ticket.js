import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ticket() {
  const navigation = useNavigation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [raisedTickets, setRaisedTickets] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!category || !description) return;
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setRaisedTickets([
        ...raisedTickets,
        {
          category: category,
          description: description,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setCategory('');
      setDescription('');
    }, 2000); // Show tick for 2 seconds
  };

  const handleDeleteTicket = (index) => {
    const updatedTickets = raisedTickets.filter((_, i) => i !== index);
    setRaisedTickets(updatedTickets);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Raise Ticket Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Raise a new ticket</Text>
        <Text style={styles.label}>Problem Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Charging"
          placeholderTextColor="#E6E6E6"
          value={category}
          onChangeText={setCategory}
        />
        <Text style={styles.label}>Problem Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Not Charging"
          placeholderTextColor="#E6E6E6"
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Contact Us here</Text>
        <Text style={styles.contactInfo}>+91 XXXXX XXXXX</Text>
        <Text style={styles.contactText}>To speak to our customer representative to address your concerns.</Text>
        <Text style={styles.contactEmail}>teamTQNX@energy.com</Text>
        <Text style={styles.contactText}>
          For two-way multimedia conversation with our customer representative to address your concerns.
        </Text>
      </View>

      {/* Raised Tickets Section */}
      <Text style={styles.ticketHeader}>📁 My Tickets</Text>
      <View style={styles.divider} />
      {raisedTickets.length === 0 ? (
        <Text style={styles.noTicketText}>We are all good, nothing to short about</Text>
      ) : (
        <FlatList
          data={raisedTickets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.ticketCard}>
              <View style={styles.ticketHeaderRow}>
                <Text style={styles.ticketTitle}>{item.category}</Text>
                {/* Dustbin as emoji */}
                <TouchableOpacity onPress={() => handleDeleteTicket(index)}>
                  <Text style={styles.deleteIcon}>🗑️</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.ticketDescription}>{item.description}</Text>
              <View style={styles.ticketFooter}>
                <Text style={styles.statusText}>
                  Status <Text style={styles.statusRaised}>Raised</Text>
                </Text>
              </View>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          )}
        />
      )}

      {/* Success Dialog */}
      <Modal visible={showSuccess} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/images/tick.png')} style={styles.tickIcon} />
            <Text style={styles.successText}>Ticket Submitted Successfully!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#fff',
  },

  card: {
    backgroundColor: '#343434',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  },

contactCard: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 5,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
  contactEmail: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: 'grey',
    width: '30%',
    padding: 12,
    borderRadius: 5,
    marginTop: 60,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  ticketHeader: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  noTicketText: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 5,
    fontStyle: 'italic',
  },
  ticketCard: {
    backgroundColor: '#2A2A2A',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  ticketHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  deleteIcon: {
    fontSize: 24,
    color: '#ff4d4d',
  },
  ticketDescription: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: 14,
    color: '#ccc',
  },
  statusRaised: {
    color: '#00FF00',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#ccc',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#343434',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  tickIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  successText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
