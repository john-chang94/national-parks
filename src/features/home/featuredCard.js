import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function FeaturedCard({ featuredPark, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ParkDetails")}>
      <Card>
        <Card.Cover source={{ uri: featuredPark.images[0].url }} />
        <Card.Content>
          <Title>{featuredPark.fullName}</Title>
          <Paragraph>
            {featuredPark.addresses[0].city}, {featuredPark.addresses[0].stateCode}
          </Paragraph>
          <Text>Read More...</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
