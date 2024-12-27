import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router";
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.textTitle}>
            Common Issues and Their Solutions on 6thTouch
          </Text>
          <Text style={{ fontWeight: 500, marginVertical: 10 }}>
            While using 6thTouch, you might encounter occasional challenges.
            Don’t worry—most issues can be resolved quickly. Here’s a guide to
            troubleshooting common problems like app crashes, login failures, or
            progress not saving.
          </Text>

          <Text style={{ fontWeight: 800, marginTop: 10 }}>Login failures</Text>
          <Text style={{ marginLeft: 10, marginBottom: 10, fontWeight: 700 }}>
            Symptoms
          </Text>
          <Text style={{ marginLeft: 20, marginBottom: 10 }}>
            - You can’t log in using email
          </Text>
          <Text style={{ marginLeft: 20, marginBottom: 10 }}>
            - Error messages like “Invalid credentials” or “Connection failed.”
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10, fontWeight: 700 }}>
            Solution
          </Text>

          <Text style={{ fontWeight: 600, marginLeft: 20 }}>
            Verify Your credentials
          </Text>
          <Text style={{ marginLeft: 30 }}>
            - Double-check your email and password for typos.
          </Text>
          <Text style={{ marginLeft: 30 }}>
            - Use the Forgot Password option if you’ve forgotten your login
            details.
          </Text>
          <Text style={{ fontWeight: 600, marginLeft: 20 }}>
            Check Internet Connection
          </Text>
          <Text style={{ marginLeft: 30 }}>
            - Ensure you have a stable internet connection.
          </Text>
          <Text style={{ marginLeft: 30 }}>
            - Switch to Wi-Fi or try a different mobile data network if needed.
          </Text>
          <Text style={{ fontWeight: 600, marginLeft: 20 }}>
            Contact Support
          </Text>
          <Text style={{ marginLeft: 30 }}>6thtouchrobotics@gmail.com</Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            Progress Not Saving
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10, fontWeight: 700 }}>
            Symptoms
          </Text>
          <Text style={{ marginLeft: 20, marginBottom: 10 }}>
            - Lessons appear incomplete after finishing them.
          </Text>
          <Text style={{ marginLeft: 20, marginBottom: 10 }}>
            - Progression Bar not increasing
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10, fontWeight: 700 }}>
            Solution
          </Text>

          <Text style={{ fontWeight: 600, marginLeft: 20 }}>
            Check your internet connection
          </Text>
          <Text style={{ marginLeft: 30 }}>
            - A weak or interrupted connection can prevent data from syncing.
            Ensure you’re online.
          </Text>

          <Text style={{ fontWeight: 600, marginLeft: 20, marginTop: 10 }}>
            Log Out and Log In Back
          </Text>
          <Text style={{ marginLeft: 30 }}>
            Sometimes, refreshing your session can resolve syncing issues.
          </Text>
          <Text style={{ fontWeight: 900, marginLeft: 10, marginTop: 10 }}>
            Other Issues
          </Text>
          <Text style={{ marginLeft: 30 }}>
            <Text style={{ fontWeight: 700, marginLeft: 20, marginTop: 10 }}>
              Problem:{" "}
            </Text>
            Video not playing
          </Text>
          <Text style={{ marginLeft: 30 }}>
            - Ensure you have a stable internet Connection
          </Text>
          <Text style={{ marginLeft: 30 }}>
            - Clear the app cache or reinstall the app if the issue persists.
          </Text>

          <Text style={{ fontWeight: 600, marginTop: 20 }}>
            Contact Support
          </Text>
          <Text style={{ marginLeft: 30 }}>6thtouchrobotics@gmail.com</Text>
        </View>
      </View>
    </ScrollView>
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
