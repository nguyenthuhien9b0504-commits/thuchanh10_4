import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PhoneNumberScreen({ navigation }) {
  const [number, setNumber] = useState('');

  return (
    <ImageBackground source={require('../assets/number/Mask Group.png')} style={styles.container} resizeMode="cover">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.inputRow}>
        <Text style={styles.flag}>🇧🇩</Text>
        <Text style={styles.code}>+880</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
          placeholder=""
          autoFocus
        />
      </View>
      <View style={styles.inputLine} />

      <View style={{ flex: 1 }} />

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('Verification')}
      >
        <Ionicons name="chevron-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#fff' },
  back: { paddingHorizontal: 20, marginBottom: 24 },
  title: { fontSize: 22, fontWeight: 'bold', paddingHorizontal: 24, marginBottom: 24 },
  label: { color: '#999', fontSize: 13, paddingHorizontal: 24, marginBottom: 6 },
  inputRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24 },
  flag: { fontSize: 20, marginRight: 6 },
  code: { fontSize: 16, marginRight: 8, color: '#333' },
  input: { flex: 1, fontSize: 16, color: '#333', paddingVertical: 8 },
  inputLine: { height: 1, backgroundColor: '#ddd', marginHorizontal: 24, marginTop: 4 },
  nextBtn: { alignSelf: 'flex-end', marginRight: 24, marginBottom: 32, width: 52, height: 52, borderRadius: 26, backgroundColor: '#4CAF50', alignItems: 'center', justifyContent: 'center' },
});
