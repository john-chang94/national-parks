import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { parseISO, formatDistance } from "date-fns";

import { theme } from "../theme";

const defaultImage =
  "https://firebasestorage.googleapis.com/v0/b/shared-images-afe55.appspot.com/o/default.png?alt=media&token=240af48a-ea86-47d7-bd69-13fc050927ac";

export default function NewsCard({ article, navigation }) {
  const timeDistance = formatDistance(
    new Date(parseISO(article.releaseDate)),
    new Date(),
    { addSuffix: true }
  );

  return (
    <TouchableOpacity
      style={styles.spacer}
      onPress={() => navigation.navigate("BrowserScreen", { url: article.url })}
    >
      <View style={styles.cardContainer}>
        <View style={styles.innerCard}>
          <Image
            style={styles.image}
            source={{
              uri: `${article.image.url ? article.image.url : defaultImage}`,
            }}
          />
          <Text style={styles.subtitle}>{article.title}</Text>
        </View>
        <Text style={styles.time}>{timeDistance}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: theme.spacing[0]
  },
  innerCard: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  image: {
      height: 80,
      width: 80,
      borderRadius: 10
  },
  subtitle: {
      marginLeft: theme.spacing[1],
      fontSize: theme.fontSizes.caption,
      flex: 1,
      flexWrap: 'wrap'
  },
  spacer: {
    marginTop: 15,
  },
  time: {
    marginTop: theme.spacing[0],
    fontStyle: "italic",
  },
});
