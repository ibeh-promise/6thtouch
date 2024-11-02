import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.nav}>
          <FontAwesome name="home" size={25} color={body.tertiary} />
        </TouchableOpacity>
        <Text style={styles.navText}>Courses</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity style={[styles.nav, styles.active]}>
          <FontAwesome name="wpexplorer" size={25} color={body.dominant} />
        </TouchableOpacity>
        <Text style={styles.navText}>Explore</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.nav}>
          <FontAwesome name="user-circle" size={25} color={body.tertiary} />
        </TouchableOpacity>
        <Text style={styles.navText}>Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: body.dominant,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-around",
  },
  navContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 20,
  },
  active: {
    backgroundColor: body.tertiary,
  },
  navText: {
    color: body.tertiary,
    marginTop: 10,
    fontWeight: "800",
  },
});
