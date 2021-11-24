import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";
import { parseISO, formatDistance } from "date-fns";

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
      onPress={() => navigation.navigate('BrowserScreen', { url: article.url })}
    >
      <Card>
        <Card.Cover
          source={{
            uri: `${article.image.url ? article.image.url : defaultImage}`,
          }}
        />
        <Card.Content>
          <Title>{article.title}</Title>
          <Text style={styles.time}>{timeDistance}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
  },
  spacer: {
    marginTop: 15,
  },
  time: {
    fontStyle: "italic",
  },
});
