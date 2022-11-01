import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#090909',
        flex: 1,

      
    },
    text: {
        color: 'white',
        fontSize: 32,
    }
});

export default HomeScreen;
