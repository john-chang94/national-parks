import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";
import { HomeContext } from "../../contexts/home";

import { theme } from "../../theme";
import { screenWidth, isAndroid } from "../../services/sysChecks";

export default function HomeScreen() {
  const { park } = useContext(HomeContext);

  return (
    <SafeAreaView>
      <ScrollView style={styles.homeContainer}>
        {!!park && (
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Featured National Park</Text>
            <View style={styles.horizontalRule} />
            <Text style={styles.subtitle}>{park.fullName}</Text>
            <Text style={styles.text}>{park.description}</Text>
            
            <Image style={styles.image} source={{ uri: park.images[1].url }} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    padding: theme.spacing[2]
  },
  innerContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSizes.title
  },
  horizontalRule: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: theme.spacing[1],
    marginBottom: theme.spacing[1]
  },
  subtitle: {
    fontSize: theme.fontSizes.subtitle,
    paddingBottom: theme.spacing[0]
  },
  text: {
    textAlign: "justify",
    paddingBottom: theme.spacing[3]
  },
  image: {
    height: screenWidth,
    width: isAndroid ? screenWidth : '100%',
  },
});
