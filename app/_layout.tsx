import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f2f2f2",
        },
        headerTitle: "",
        headerShadowVisible: false,
       
      }}
    ></Stack>
  );
}

const styles = StyleSheet.create({});
