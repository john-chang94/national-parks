import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { theme } from "../theme";
import { HomeContext } from "../contexts/home";
import { isAndroid, screenWidth } from "../services/sysChecks";

export default function ParkDetails() {
  const { park } = useContext(HomeContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Park Details</Text>
        <Text style={styles.text}>{park.description}</Text>
        {park.images.length &&
          park.images.map((image, i) => (
            <Image key={i} style={styles.image} source={{ uri: image.url }} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "justify",
    paddingBottom: theme.spacing[2],
  },
  image: {
    height: screenWidth,
    width: "100%",
    marginBottom: theme.spacing[1],
  },
});
