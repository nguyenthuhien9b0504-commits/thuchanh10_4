import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <ImageBackground source={require('../assets/sign up/Mask Group.png')} style={styles.container} resizeMode="cover">
      <View style={styles.carrotIcon}>
        <Image source={require('../assets/sign up/Group.png')} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="[Your Name]" />
      <View style={styles.inputLine} />

      <Text style={styles.label}>Email</Text>
      <View style={styles.passRow}>
        <TextInput style={[styles.input, { flex: 1 }]} value={email} onChangeText={setEmail} placeholder="[user@email.com]" keyboardType="email-address" autoCapitalize="none" />
        {email.length > 0 && <Ionicons name="checkmark" size={20} color="#4CAF50" />}
      </View>
      <View style={styles.inputLine} />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passRow}>
        <TextInput style={[styles.input, { flex: 1 }]} value={password} onChangeText={setPassword} secureTextEntry={!showPass} placeholder="••••••••" />
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} size={20} color="#999" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputLine} />

      <Text style={styles.terms}>
        By continuing you agree to our{' '}
        <Text style={styles.link}>Terms of Service</Text>
        {' '}and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.signupBtnText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
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
  terms: { color: '#999', fontSize: 12, marginTop: 16, marginBottom: 24, lineHeight: 18 },
  link: { color: '#4CAF50' },
  signupBtn: { backgroundColor: '#4CAF50', borderRadius: 30, padding: 16, alignItems: 'center', marginBottom: 20 },
  signupBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  loginRow: { flexDirection: 'row', justifyContent: 'center' },
  loginText: { color: '#333', fontSize: 14 },
  loginLink: { color: '#4CAF50', fontWeight: '600', fontSize: 14 },
});
