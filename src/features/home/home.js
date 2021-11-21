import React, { useContext } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { HomeContext } from "../../contexts/home";

export default function HomeScreen() {
  const { park } = useContext(HomeContext);

  return (
    <ScrollView style={styles.homeContainer}>
      {!!park && (
        <View>
          <Text>Park Name: {park.fullName}</Text>
          <Text>Park Description: {park.description}</Text>
          <Text>Image: <Image style={styles.image} source={{ uri: park.images[1].url }} /></Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 24,
    padding: 15
  },
  image: {
      height: 200
  }
});
