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
              uri: 'https://neilpatel.com/wp-content/uploads/fly-images/47522/blog-post-image-guide-1200x675-c.jpg',
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
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {},
  headerText: {},
  cardImage: {},
  bodyContainer: {},
  footerContainer: {},
  socialsStyles: {},
  readMore: {},
});
