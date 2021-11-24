import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function FeaturedCard({ park, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ParkDetails")}>
      <Card>
        <Card.Cover source={{ uri: park.images[0].url }} />
        <Card.Content>
          <Title>{park.fullName}</Title>
          <Paragraph>
            {park.addresses[0].city}, {park.addresses[0].stateCode}
          </Paragraph>
          <Text>Read More...</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
