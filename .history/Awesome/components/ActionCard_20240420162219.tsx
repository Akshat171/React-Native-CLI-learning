/* eslint-disable prettier/prettier */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={styles.card}>
        <View style={styles.elevatedCard}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What's new in js?</Text>
          </View>
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg',
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
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('')}>
              <Text style={styles.readMore}>Read more..</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('')}>
              <Text style={styles.socialsStyles}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 340,
  },
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {},
  bodyContainer: {},
  footerContainer: {},
  socialsStyles: {},
  readMore: {},
});
