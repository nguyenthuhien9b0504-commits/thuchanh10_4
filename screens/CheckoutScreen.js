import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Image, Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const cartItems = [
  { id: 1, name: 'Bell Pepper Red', desc: '1kg, Price', price: 4.99, qty: 1 },
  { id: 2, name: 'Egg Chicken Red', desc: '4pcs, Price', price: 1.99, qty: 1 },
  { id: 3, name: 'Sprite Can', desc: '325ml, Price', price: 7.00, qty: 1 },
];

export default function CheckoutScreen({ navigation }) {
  const [items, setItems] = useState(cartItems);
  const [showModal, setShowModal] = useState(false);

  const updateQty = (id, delta) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <ScrollView style={{ flex: 1 }}>
        {items.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <View style={styles.imagePlaceholder}>
              <Ionicons name="leaf-outline" size={28} color="#4CAF50" />
            </View>
            <View style={styles.itemInfo}>
              <View style={styles.rowBetween}>
                <Text style={styles.itemName}>{item.name}</Text>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Ionicons name="close" size={18} color="#999" />
                </TouchableOpacity>
              </View>
              <Text style={styles.itemDesc}>{item.desc}</Text>
              <View style={styles.rowBetween}>
                <View style={styles.qtyRow}>
                  <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQty(item.id, -1)}>
                    <Ionicons name="remove" size={16} color="#333" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.qty}</Text>
                  <TouchableOpacity style={[styles.qtyBtn, styles.qtyBtnGreen]} onPress={() => updateQty(item.id, 1)}>
                    <Ionicons name="add" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <View style={styles.rowBetween}>
              <Text style={styles.modalTitle}>Checkout</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close" size={22} color="#333" />
              </TouchableOpacity>
            </View>
            {[
              { label: 'Delivery', value: 'Select Method' },
              { label: 'Payment', value: 'Card' },
              { label: 'Promo Code', value: 'Pick discount' },
              { label: 'Total Cost', value: '$' + total },
            ].map((row, i) => (
              <View key={i} style={styles.modalRow}>
                <Text style={styles.modalLabel}>{row.label}</Text>
                <View style={styles.rowCenter}>
                  <Text style={styles.modalValue}>{row.value}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#999" style={{ marginLeft: 4 }} />
                </View>
              </View>
            ))}
            <Text style={styles.terms}>
              By placing an order you agree to our{' '}
              <Text style={styles.bold}>Terms</Text> And{' '}
              <Text style={styles.bold}>Conditions</Text>
            </Text>
            <TouchableOpacity
              style={styles.placeBtn}
              onPress={() => { setShowModal(false); navigation.navigate('OrderAccepted'); }}
            >
              <Text style={styles.placeBtnText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.placeBtn} onPress={() => setShowModal(true)}>
        <Text style={styles.placeBtnText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  cartItem: { flexDirection: 'row', backgroundColor: '#fff', marginHorizontal: 16, marginVertical: 6, borderRadius: 12, padding: 12, alignItems: 'center' },
  imagePlaceholder: { width: 60, height: 60, borderRadius: 8, backgroundColor: '#f0faf0', alignItems: 'center', justifyContent: 'center' },
  itemInfo: { flex: 1, marginLeft: 10 },
  itemName: { fontWeight: 'bold', fontSize: 15, flex: 1 },
  itemDesc: { color: '#999', fontSize: 12, marginVertical: 4 },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: '#ddd', alignItems: 'center', justifyContent: 'center' },
  qtyBtnGreen: { backgroundColor: '#4CAF50', borderColor: '#4CAF50' },
  qtyText: { fontSize: 15, fontWeight: '600', marginHorizontal: 8 },
  itemPrice: { fontWeight: 'bold', fontSize: 15 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'flex-end' },
  modal: { backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 },
  modalTitle: { fontSize: 20, fontWeight: 'bold' },
  modalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  modalLabel: { color: '#999', fontSize: 15 },
  modalValue: { fontWeight: '600', fontSize: 15 },
  terms: { color: '#999', fontSize: 12, textAlign: 'center', marginVertical: 16 },
  bold: { fontWeight: 'bold', color: '#333' },
  placeBtn: { backgroundColor: '#4CAF50', borderRadius: 30, padding: 16, alignItems: 'center', margin: 16 },
  placeBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
