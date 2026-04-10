import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <ImageBackground source={require('../assets/log in/Mask Group.png')} style={styles.container} resizeMode="cover">
      <View style={styles.carrotIcon}>
        <Image source={require('../assets/log in/Group.png')} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="[user@email.com]" keyboardType="email-address" autoCapitalize="none" />
      <View style={styles.inputLine} />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passRow}>
        <TextInput style={[styles.input, { flex: 1 }]} value={password} onChangeText={setPassword} secureTextEntry={!showPass} placeholder="••••••••" />
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} size={20} color="#999" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputLine} />

      <TouchableOpacity style={styles.forgotRow}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.loginBtnText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 60, backgroundColor: '#fff' },
  carrotIcon: { alignItems: 'center', marginBottom: 24 },
  logo: { width: 60, height: 60 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { color: '#999', fontSize: 14, marginBottom: 32 },
  label: { color: '#999', fontSize: 13, marginBottom: 4, marginTop: 16 },
  input: { fontSize: 16, color: '#333', paddingVertical: 8 },
  inputLine: { height: 1, backgroundColor: '#eee' },
  passRow: { flexDirection: 'row', alignItems: 'center' },
  forgotRow: { alignItems: 'flex-end', marginTop: 8, marginBottom: 24 },
  forgot: { color: '#999', fontSize: 13 },
  loginBtn: { backgroundColor: '#4CAF50', borderRadius: 30, padding: 16, alignItems: 'center', marginBottom: 20 },
  loginBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  signupRow: { flexDirection: 'row', justifyContent: 'center' },
  signupText: { color: '#333', fontSize: 14 },
  signupLink: { color: '#4CAF50', fontWeight: '600', fontSize: 14 },
});
