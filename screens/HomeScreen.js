import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
});

export default HomeScreen;
