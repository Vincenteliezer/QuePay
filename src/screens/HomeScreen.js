import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Home Screen Hey</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigate('Devices')}>
          <Text style={styles.textDevices}>Device</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: 'gray',
    fontSize: 16,
  },
  textDevices: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 12,
  },
});

export default HomeScreen;
