import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MusicList from "./MusicList";

export default function SimpleMusicPlayer() {
  return (
    <View style={{ flex: 1 }}>
      <MusicList />
    </View>
    // <View style={styles.container}>
    //   <View style={{ flex: 2 }}>
    //     <MusicList />
    //   </View>
    //   <View
    //     style={{
    //       flex: 1,
    //       width: "100%",
    //       alignItems: "center",
    //       backgroundColor: "gray",
    //     }}
    //   >
    //     <Text>Music Player Controls Here</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
