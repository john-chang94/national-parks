import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../theme";
import { days } from "../services/data";
import { HomeContext } from "../contexts/home";
import { screenWidth } from "../services/sysChecks";

export default function ParkDetails() {
  const { featuredPark } = useContext(HomeContext);

  const address = `${featuredPark.addresses[0].line1} \n${featuredPark.addresses[0].city}, ${featuredPark.addresses[0].stateCode} ${featuredPark.addresses[0].postalCode}`;
  const hours = featuredPark.operatingHours[0];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{featuredPark.fullName}</Text>
          <Text style={styles.parkInfo}>{featuredPark.description}</Text>
          <View style={styles.infoContainer}>
            <Ionicons name="location" size={16} color="green" />
            <Text style={theme.spacer.leftSm}>Address</Text>
          </View>
          <Text>{address}</Text>

          <View style={styles.infoContainer}>
            <Ionicons name="alert-circle" size={16} color="green" />
            <Text style={theme.spacer.leftSm}>Additional Info</Text>
          </View>
          <Text>{hours.description}</Text>
          <View style={styles.infoContainer}>
            <Ionicons name="time" size={16} color="green" />
            <Text style={theme.spacer.leftSm}>Hours of Operation</Text>
          </View>

          {days.map((day, i) => (
            <Text key={i}>
              {day.short}: {hours.standardHours[day.long]}
            </Text>
          ))}

          <View style={styles.infoContainer}>
            <Ionicons name="logo-usd" size={16} color="green" />
            <Text style={theme.spacer.leftSm}>Admissions</Text>
          </View>
          {featuredPark.entranceFees.map((fee, i) => (
            <View key={i}>
              <Text>
                ${fee.cost} - {fee.title}
              </Text>
              <Text>{fee.description}</Text>
              <View style={theme.horizontalRule.sm} />
            </View>
          ))}

          <View style={theme.spacer.topMd}>
            {featuredPark.images.map((image, i) => (
              <Image key={i} style={styles.image} source={{ uri: image.url }} />
            ))}
          </View>
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
    marginBottom: theme.spacing[0],
  },
  parkInfo: {
    textAlign: "justify",
    marginBottom: theme.spacing[0],
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: "lightgray",
  },
  image: {
    height: screenWidth,
    width: "100%",
    marginBottom: theme.spacing[1],
  },
});
