/* eslint-disable prettier/prettier */
import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={styles.elevatedCard}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  elevatedCard: {},
});
