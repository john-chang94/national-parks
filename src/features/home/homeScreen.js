import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import NewsCard from "../../components/newsCard";
import { HomeContext } from "../../contexts/home";

import { theme } from "../../theme";
import FeaturedCard from "./featuredCard";

export default function HomeScreen({ navigation }) {
  const { park, articles, featuredIsLoading, articlesIsLoading } =
    useContext(HomeContext);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Featured National Park</Text>
        {featuredIsLoading ? (
          <View style={styles.spacer}>
            <ActivityIndicator size="large" color={Colors.blue300} />
          </View>
        ) : (
          <FeaturedCard park={park} navigation={navigation} />
        )}
        
        <View style={styles.horizontalRule} />

        <Text style={styles.title}>Latest News</Text>
        {articlesIsLoading ? (
          <View style={styles.spacer}>
            <ActivityIndicator size="large" color={Colors.blue300} />
          </View>
        ) : (
          <View>
            {articles.length &&
              articles.map((item, i) => (
                <View key={i}>
                  <NewsCard article={item} navigation={navigation} />
                </View>
              ))}
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
