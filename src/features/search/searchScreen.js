import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { theme } from "../../theme";

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{ fontSize: theme.fontSizes.title }}>Search</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing[1],
  },
});
