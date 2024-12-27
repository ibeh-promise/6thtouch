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
        <Text style={styles.textTitle}>Personalizing Your Account</Text>
        <Text style={{ fontWeight: 500, marginVertical: 20 }}>
          Your 6thTouch profile is the gateway to a tailored learning
          experience. By setting it up and adding your interests, you’ll unlock
          recommendations that align with your goals, track your payment
          history, and invite friends.
        </Text>
        <Text style={styles.textTitle}>Setting Up Your Profile</Text>
        <Text style={{ fontWeight: 800, marginTop: 10 }}>
          Access Your Profile
        </Text>
        <Text style={styles.textBody}>
          Tap on the account icon at the top left Navigation bar
        </Text>
        <Text style={{ fontWeight: 800 }}>Add or Update Profile Picture</Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}>
          - Tap on the <Text style={{ fontWeight: 800 }}> User Image </Text> to
          choose your desired image
        </Text>
        <Text style={{ fontWeight: 800 }}>Add or Update Profile Details</Text>
        <Text style={{ marginLeft: 10 }}>
          - Tap on the <Text style={{ fontWeight: 800 }}> Edit Profile </Text>{" "}
          button
        </Text>
        <Text style={{ marginLeft: 10 }}>- Enter your details including</Text>
        <Text style={{ marginLeft: 30 }}>- First name</Text>
        <Text style={{ marginLeft: 30 }}>- Last name</Text>
        <Text style={{ marginLeft: 30 }}>- Email</Text>
        <Text style={{ marginLeft: 10 }}>
          - Save changes by clicking on the{" "}
          <Text style={{ fontWeight: 800 }}> Edit Profile </Text> button
        </Text>
        <Text style={{ fontWeight: 800, marginTop: 20 }}>
          Logout or Delete Account
        </Text>

        <Text style={{ fontWeight: 800, marginLeft: 10 }}>Logout</Text>

        <Text style={{ marginLeft: 20 }}>
          - Tap on the <Text style={{ fontWeight: 800 }}> Logout </Text> button
          at the bottom of the account page
        </Text>
        <Text style={{ fontWeight: 800, marginLeft: 10 }}>Delete Account</Text>

        <Text style={{ marginLeft: 20 }}>
          - Tap on <Text style={{ fontWeight: 800 }}> settings </Text> button at
          account page
        </Text>
        <Text style={{ marginLeft: 20 }}>
          - CLick on <Text style={{ fontWeight: 800 }}> Delete Account </Text>{" "}
          button at settings page
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
