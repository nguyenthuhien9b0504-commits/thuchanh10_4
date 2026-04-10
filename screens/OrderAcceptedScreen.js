import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderAcceptedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <View style={[styles.dot, { top: 10, left: 85, backgroundColor: '#4CAF50' }]} />
        <View style={[styles.dot, { top: 20, right: 30, backgroundColor: '#f44336', width: 8, height: 8 }]} />
        <View style={[styles.dot, { bottom: 20, left: 30, backgroundColor: '#FF9800', width: 10, height: 10, borderRadius: 5 }]} />
        <View style={[styles.dot, { bottom: 10, right: 75, backgroundColor: '#2196F3', width: 12, height: 12 }]} />
        <View style={[styles.dot, { top: 75, left: 10, backgroundColor: '#9C27B0', width: 8, height: 8, borderRadius: 4 }]} />
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={60} color="#fff" />
        </View>
      </View>

      <Text style={styles.title}>Your Order has been{'\n'}accepted</Text>
      <Text style={styles.subtitle}>
        Your items has been placed and is on{'\n'}its way to being processed
      </Text>

      <TouchableOpacity style={styles.trackBtn} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.trackBtnText}>Track Order</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Text style={styles.backText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', alignItems: 'center', justifyContent: 'center', padding: 24 },
  iconBox: {
    width: 200, height: 200,
    borderWidth: 2, borderColor: '#4CAF50', borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 32,
  },
  checkCircle: {
    width: 120, height: 120, borderRadius: 60,
    backgroundColor: '#4CAF50',
    alignItems: 'center', justifyContent: 'center',
  },
  dot: { position: 'absolute', width: 10, height: 10, borderRadius: 5 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  subtitle: { color: '#999', textAlign: 'center', fontSize: 14, marginBottom: 40 },
  trackBtn: { backgroundColor: '#4CAF50', borderRadius: 30, paddingVertical: 16, paddingHorizontal: 60, marginBottom: 16 },
  trackBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  backText: { color: '#333', fontWeight: '600', fontSize: 15 },
});
