import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import useAuth from "@/hooks/useAuth";
import body from "@/constants/Colors";
export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textTitle}>Navigating the 6thtouch App</Text>
        <Text style={{ fontWeight: 500, marginVertical: 20 }}>
          Welcome to 6thTouch! Here’s a guide to help you explore the app and
          make the most of its features. Each section is carefully designed to
          provide you with a seamless and engaging learning experience.
        </Text>
        <Text style={styles.textTitle}>Main Sections of the App</Text>
        <Text style={{ fontWeight: 800 }}>Explore Page</Text>
        <Text style={styles.textBody}>
          <Text style={{ fontWeight: 800 }}>What it is:</Text> This is the a
          page where you can find structrued lessons on various subject and
          enroll for them.
        </Text>
        <Text style={{ fontWeight: 800 }}>What you can do: </Text>
        <Text style={{ marginLeft: 30 }}>
          Browse Course By Catergories e.g ( Legomindstorm, python ).
        </Text>
        <Text style={{ marginLeft: 30 }}>
          Enroll your desired coures by clicking the enroll button.
        </Text>
        <Text style={{ fontWeight: 800, marginTop: 20 }}>myCourses Page</Text>
        <Text style={styles.textBody}>
          <Text style={{ fontWeight: 800 }}>What it is:</Text> This is the heart
          of 6thTouch. Find structured lessons on coding and robotics, from
          beginner to advanced levels.
        </Text>
        <Text style={{ fontWeight: 800 }}>What you can do: </Text>
        <Text style={{ marginLeft: 30 }}>
          Browse courses by category (e.g., Python, Arduino, Web Development).
        </Text>
        <Text style={{ marginLeft: 30 }}>
          Track your progress and pick up where you left off.
        </Text>
        <Text style={{ marginLeft: 30 }}>
          Watch video tutorials, try video quizzes.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: body.dominant,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container2: {
    backgroundColor: body.tertiary,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 18,
  },
  passwordInput: {
    width: Dimensions.get("window").width - 80,
    borderRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  passwordInputContainer: {
    width: Dimensions.get("window").width - 50,
    backgroundColor: "#E2E2E2",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    marginVertical: 20,
    borderRadius: 30,
  },
  helpContent: {
    flexDirection: "row",
    width: 260,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  helpContentText: {
    fontSize: 18,
    fontWeight: 900,
    marginLeft: 30,
  },
  textBody: {
    marginBottom: 10,
  },
});
