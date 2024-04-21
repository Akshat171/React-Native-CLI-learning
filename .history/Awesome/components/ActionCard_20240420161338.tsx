/* eslint-disable prettier/prettier */
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
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
          <Text style={styles.headerText}>What's new in js?</Text>
        </View>
        <Image
          source={{
            uri: '',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus sequi, illum quo explicabo facilis ea error
            consectetur tempore harum commodi alias dolor odio labore eveniet
            non, dignissimos maxime? Illo, repellendus.
          </Text>
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
  cardImage: {},
  bodyContainer: {},
});
