import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderFailedScreen({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.bgItem}>
        <Ionicons name="beer-outline" size={28} color="#4CAF50" style={{ marginRight: 10 }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.bgItemName}>Sprite Can</Text>
          <Text style={styles.bgItemDesc}>325ml, Price</Text>
        </View>
        <Text style={styles.bgItemPrice}>$1.50 {'>'}</Text>
      </View>

      <View style={styles.modal}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={22} color="#333" />
        </TouchableOpacity>

        <View style={styles.illustrationCircle}>
          <Ionicons name="bag-handle-outline" size={80} color="#4CAF50" />
        </View>

        <Text style={styles.title}>Oops! Order Failed</Text>
        <Text style={styles.subtitle}>Something went terribly wrong.</Text>

        <TouchableOpacity style={styles.retryBtn} onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.retryBtnText}>Please Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Text style={styles.backText}>Back to home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        {[
          { icon: 'grid-outline', label: 'Shop' },
          { icon: 'search-outline', label: 'Explore' },
          { icon: 'cart-outline', label: 'Cart' },
          { icon: 'heart-outline', label: 'Favourite', active: true },
          { icon: 'person-outline', label: 'Account' },
        ].map((tab, i) => (
          <TouchableOpacity key={i} style={styles.tabItem}>
            <Ionicons name={tab.icon} size={22} color={tab.active ? '#4CAF50' : '#999'} />
            <Text style={[styles.tabLabel, tab.active ? { color: '#4CAF50' } : null]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: '#f2f2f2' },
  bgItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', margin: 16, borderRadius: 12, padding: 14 },
  bgItemName: { fontWeight: 'bold', fontSize: 15 },
  bgItemDesc: { color: '#999', fontSize: 12 },
  bgItemPrice: { fontWeight: '600' },
  modal: {
    position: 'absolute', bottom: 60, left: 0, right: 0,
    backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24,
    padding: 24, alignItems: 'center',
  },
  closeBtn: { alignSelf: 'flex-start', marginBottom: 16 },
  illustrationCircle: {
    width: 140, height: 140, borderRadius: 70,
    backgroundColor: '#f0faf0', alignItems: 'center', justifyContent: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: '#999', fontSize: 14, marginBottom: 32 },
  retryBtn: { backgroundColor: '#4CAF50', borderRadius: 30, paddingVertical: 16, alignSelf: 'stretch', alignItems: 'center', marginBottom: 16 },
  retryBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  backText: { color: '#333', fontWeight: '600', fontSize: 15, marginBottom: 16 },
  tabBar: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', backgroundColor: '#fff', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#eee' },
  tabItem: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 11, color: '#999', marginTop: 2 },
});
