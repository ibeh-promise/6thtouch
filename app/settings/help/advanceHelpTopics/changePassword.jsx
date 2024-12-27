import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Link, useRouter } from "expo-router";
import body from "@/constants/Colors";
export default function Page() {
  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.textTitle}>
            Changing Your Password on 6thTouch
          </Text>
          <Text style={{ fontWeight: 500, marginVertical: 10 }}>
            Keeping your account secure is important. If you need to change your
            password, follow these simple steps to update it through the
            6thTouch app.
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            1. Access the settings
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Open the Settings Page by tapping the ellipsis icon menu icon at
            the top navigation bar.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - the menu is supposed to be seen showing only{" "}
            <Text style={{ fontWeight: 600 }}>Settings</Text>
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Click on the <Text style={{ fontWeight: 600 }}>Settings </Text>
            button At the menu to be directed to the settings page
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Click on the
            <Text style={{ fontWeight: 600 }}> Login Settings </Text>
            button
          </Text>
          <Text style={{ fontWeight: 600, marginLeft: 10, marginBottom: 10 }}>
            2. choose
            <Text style={{ fontWeight: 900 }}> Change Password </Text>
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - You will be prompted to verify your identity by entering your
            current password
          </Text>
          <Text style={{ fontWeight: 600, marginLeft: 10, marginBottom: 10 }}>
            3. Set A New Password
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Enter your new password in the provided field
          </Text>
          <Text style={{ fontWeight: 600, marginLeft: 20, marginBottom: 10 }}>
            - Tips For Strong Password
          </Text>
          <Text style={{ marginLeft: 30, marginBottom: 10 }}>
            - use at least 8 characters
          </Text>
          <Text style={{ marginLeft: 30, marginBottom: 10 }}>
            - Include a mix of letters, numbers, and special symbols.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Confirm the new password by re-entering it in the confirmation
            field.
          </Text>
          <Text style={{ fontWeight: 600, marginLeft: 10, marginBottom: 10 }}>
            4. Save Changes
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            Tap <Text style={{ fontWeight: 600 }}>Update Password </Text>to
            finalize the changes..
          </Text>
          <Text style={{ fontWeight: 600, marginTop: 10 }}>
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
