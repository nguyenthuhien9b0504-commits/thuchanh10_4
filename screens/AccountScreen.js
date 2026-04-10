import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  { icon: 'bag-outline', label: 'Orders' },
  { icon: 'card-outline', label: 'My Details' },
  { icon: 'location-outline', label: 'Delivery Address' },
  { icon: 'wallet-outline', label: 'Payment Methods' },
  { icon: 'pricetag-outline', label: 'Promo Code' },
  { icon: 'notifications-outline', label: 'Notifications' },
  { icon: 'help-circle-outline', label: 'Help' },
  { icon: 'information-circle-outline', label: 'About' },
];

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileRow}>
          <Image source={require('../assets/icon.png')} style={styles.avatar} />
          <View style={{ marginLeft: 14 }}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>[User Name]</Text>
              <Ionicons name="pencil-outline" size={16} color="#4CAF50" style={{ marginLeft: 6 }} />
            </View>
            <Text style={styles.email}>[user@email.com]</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {menuItems.map((item, i) => (
          <TouchableOpacity key={i} style={styles.menuItem}>
            <Ionicons name={item.icon} size={22} color="#333" style={{ marginRight: 16 }} />
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutBtn}>
          <Ionicons name="log-out-outline" size={20} color="#4CAF50" style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.tabBar}>
        {[
          { icon: 'grid-outline', label: 'Shop', screen: 'Checkout' },
          { icon: 'search-outline', label: 'Explore' },
          { icon: 'cart-outline', label: 'Cart', screen: 'Checkout' },
          { icon: 'heart-outline', label: 'Favourite', screen: 'OrderFailed' },
          { icon: 'person-outline', label: 'Account', active: true },
        ].map((tab, i) => (
          <TouchableOpacity key={i} style={styles.tabItem} onPress={() => tab.screen && navigation.navigate(tab.screen)}>
            <Ionicons name={tab.icon} size={22} color={tab.active ? '#4CAF50' : '#999'} />
            <Text style={[styles.tabLabel, tab.active ? { color: '#4CAF50' } : null]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileRow: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 50 },
  avatar: { width: 64, height: 64, borderRadius: 8, borderWidth: 2, borderColor: '#ddd' },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  name: { fontWeight: 'bold', fontSize: 18 },
  email: { color: '#999', fontSize: 13 },
  divider: { height: 1, backgroundColor: '#f0f0f0', marginHorizontal: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' },
  menuLabel: { fontSize: 15, color: '#333', flex: 1 },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20, backgroundColor: '#f5f5f5', borderRadius: 30, padding: 16 },
  logoutText: { color: '#4CAF50', fontWeight: '600', fontSize: 16 },
  tabBar: { flexDirection: 'row', backgroundColor: '#fff', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#eee' },
  tabItem: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 11, color: '#999', marginTop: 2 },
});
