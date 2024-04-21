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
      <View style={styles.elevatedCard}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in js</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
});
