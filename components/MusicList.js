import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const DATA = [
  {
    id: "1",
    name: "Item 1",
  },
  {
    id: "2",
    name: "Item 2",
  },
  {
    id: "3",
    name: "Item 3",
  },
];

const Item = ({ name }) => (
  <ListItem bottomDivider>
    <Avatar rounded title="H" />
    <ListItem.Content>
      <ListItem.Title>{name}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
);

export default function MusicList() {
  const renderItem = ({ item, index }) => <Item name={item.name} />;

  return (
    <>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
