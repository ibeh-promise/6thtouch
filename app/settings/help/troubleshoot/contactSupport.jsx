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
          <Text style={styles.textTitle}>Contact Support on 6thTouch</Text>
          <Text style={{ fontWeight: 500, marginVertical: 10 }}>
            At 6thTouch, we’re committed to providing you with a seamless
            learning experience. If you encounter any issues, have questions, or
            want to report a bug, our support team is ready to assist you.
            Here’s how you can reach us:
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            In-App “Report a Problem” Feature
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Open the Account Page by tapping the icon at the top navigation
            bar.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Click on the
            <Text style={{ fontWeight: 600 }}> Report a bug </Text> button
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - At the Reports page fill out the form with the following details
          </Text>
          <Text style={{ marginLeft: 20, marginBottom: 10 }}>
            - <Text style={{ fontWeight: 600 }}>Title: </Text> Give a title to
            your report (e.g bug, Login Issue, Course Material)
          </Text>
          <Text>
            - <Text style={{ fontWeight: 600 }}>Description: </Text> Provide an
            Explanation to your report
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>Via Email</Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            You can also contact us via email for any inquiries or to report
            issues:
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - <Text style={{ fontWeight: 600 }}>Email address: </Text>{" "}
            6thtouchrobotics@gmail.com
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Make sure to include:
          </Text>
          <Text style={{ marginLeft: 20, marginBottom: 10 }}>
            - A clear description of the issue.
          </Text>
          <Text style={{ marginLeft: 20, marginBottom: 10 }}>
            - Steps to reproduce the problem, if applicable.
          </Text>
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
