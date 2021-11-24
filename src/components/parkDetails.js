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
import { screenWidth } from "../services/sysChecks";

export default function ParkDetails() {
  const { park } = useContext(HomeContext);

  const address = `${park.addresses[0].line1} \n${park.addresses[0].city}, ${park.addresses[0].stateCode} ${park.addresses[0].postalCode}`;
  const hours = park.operatingHours[0];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{park.fullName}</Text>
          <Text style={styles.description}>{park.description}</Text>
          <Text style={theme.spacer.bottomMd}>{address}</Text>

          <Text>{hours.description}</Text>
          <Text style={theme.spacer.topSm}>Hours of Operation</Text>
          <Text>Mon: {hours.standardHours["monday"]}</Text>
          <Text>Tue: {hours.standardHours["tuesday"]}</Text>
          <Text>Wed: {hours.standardHours["wednesday"]}</Text>
          <Text>Thu: {hours.standardHours["thursday"]}</Text>
          <Text>Fri: {hours.standardHours["friday"]}</Text>
          <Text>Sat: {hours.standardHours["saturday"]}</Text>
          <Text>Sun: {hours.standardHours["sunday"]}</Text>

          <Text style={theme.spacer.topSm}>Prices</Text>
          {park.entranceFees.length &&
            park.entranceFees.map((fee, i) => (
              <View key={i} style={styles.feesContainer}>
                <Text>For: {fee.title}</Text>
                <Text>Cost: ${fee.cost}</Text>
                <Text>Info: {fee.description}</Text>
              </View>
            ))}

          {park.images.length &&
            park.images.map((image, i) => (
              <Image key={i} style={styles.image} source={{ uri: image.url }} />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing[1],
  },
  title: {
    fontSize: theme.fontSizes.title,
    textAlign: "center",
    marginBottom: theme.spacing[0]
  },
  description: {
    textAlign: "justify",
    marginBottom: theme.spacing[2]
  },
  feesContainer: {
    paddingTop: theme.spacing[0],
    paddingBottom: theme.spacing[0]
  },
  image: {
    height: screenWidth,
    width: "100%",
    marginBottom: theme.spacing[1]
  },
});
