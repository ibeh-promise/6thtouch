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
        <Text style={styles.textTitle}>Creating An Account</Text>
        <Text style={{ fontWeight: 500, marginVertical: 20 }}>
          Get started with 6thTouch by creating an account to unlock access to
          all the exciting features and courses. Follow these simple steps to
          sign up or log in:
        </Text>
        <Text style={styles.textTitle2}>Sign Up: A Step-by-Step Guide</Text>
        <Text style={styles.textBody}>
          <Text style={{ fontWeight: 800 }}>1. Open the app:</Text> Launch the
          6thTouch app on your mobile device.
        </Text>
        <Text style={styles.textBody}>
          <Text style={{ fontWeight: 800 }}>2. Choose Signup:</Text> On the
          login screen, tap the Sign Up button to create a new account.
        </Text>
        <Text style={{ fontWeight: 800 }}>3. Enter Your Details:</Text>
        <Text style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: 600 }}>First Name:</Text> Enter your First
          name
        </Text>
        <Text style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: 600 }}>Last Name:</Text> Enter your Last
          name
        </Text>
        <Text style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: 600 }}>Email Address:</Text> Provide an
          email address
        </Text>
        <Text style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: 600 }}>Password:</Text> Create a Secured
          Password
        </Text>
        <Text style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: 600 }}>Confirm Password:</Text> Retype this
          same password for confirmation
        </Text>
        <Text style={{ fontWeight: 800 }}>4. Welcome Email:</Text>
        <Text style={{ marginLeft: 20 }}>
          <Text>Check your inbox for an email from 6thTouch.</Text>
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
  textTitle2: {
    textAlign: "start",
    fontWeight: "700",
    fontSize: 17,
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
