import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  Paragraph,
  Title,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { HomeContext } from "../../contexts/home";

import { theme } from "../../theme";

const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/shared-images-afe55.appspot.com/o/default.png?alt=media&token=240af48a-ea86-47d7-bd69-13fc050927ac';

export default function HomeScreen({ navigation }) {
  const { park, news, featuredIsLoading, newsIsLoading } =
    useContext(HomeContext);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {!!park && (
          <View>
            <Text style={styles.title}>Featured National Park</Text>

            {featuredIsLoading ? (
              <View style={styles.spacer}>
                <ActivityIndicator size="large" color={Colors.blue300} />
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ParkDetails")}
                >
                  <Card>
                    <Card.Cover source={{ uri: park.images[0].url }} />
                    <Card.Content>
                      <Title>{park.fullName}</Title>
                      <Paragraph>
                        {park.addresses[0].city}, {park.addresses[0].stateCode}
                      </Paragraph>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
                <View style={styles.horizontalRule} />

                <View>
                  <Text style={styles.title}>Latest News</Text>

                  {newsIsLoading ? (
                    <View style={styles.spacer}>
                      <ActivityIndicator size="large" color={Colors.blue300} />
                    </View>
                  ) : (
                    <View>
                      {news.length &&
                        news.map((item, i) => (
                          <View key={i}>
                            <Image
                              style={styles.image}
                              source={{ uri: `${ item.image.url ? item.image.url : defaultImage}` }}
                            />
                            <Text>{item.title}</Text>
                          </View>
                        ))}
                    </View>
                  )}
                </View>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing[2],
  },
  title: {
    fontSize: theme.fontSizes.title,
    marginBottom: theme.spacing[2],
    alignSelf: "center",
  },
  subtitle: {
    fontSize: theme.fontSizes.subtitle,
    paddingBottom: theme.spacing[0],
    alignSelf: "center",
  },
  horizontalRule: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: theme.spacing[2],
    marginBottom: theme.spacing[2],
  },
  image: {
    height: 325,
    width: "100%",
    marginBottom: theme.spacing[1],
  },
  spacer: {
    marginTop: theme.spacing[8],
  },
});
