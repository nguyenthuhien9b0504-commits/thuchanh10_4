import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.replace('Onboarding')}>
      <View style={styles.container}>
        <Image source={require('../assets/splash/Group 1.png')} style={styles.logo} resizeMode="contain" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4CAF50', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 250, height: 150 },
});
