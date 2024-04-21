/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/f4/2e/a8/from-across-the-road.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
});
