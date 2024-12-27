import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
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
  const [isCaret1, setIsCaret1] = useState(false);
  const [isCaret2, setIsCaret2] = useState(false);
  const [isCaret3, setIsCaret3] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.textTitle}>Frequently Asked Question</Text>

          <Text style={{ fontWeight: 800, marginVertical: 20 }}>
            Help Questions
          </Text>
          <TouchableOpacity
            style={styles.helpContent}
            onPress={() => setIsCaret1(!isCaret1)}
          >
            <FontAwesome name="question" size={18} />
            <Text style={styles.helpContentText}>How do i enroll a course</Text>
            <FontAwesome
              name={isCaret1 ? "caret-up" : "caret-down"}
              size={18}
            />
          </TouchableOpacity>
          {isCaret1 && (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text style={{ fontWeight: 800 }}>Explore Course</Text>
              <Text style={{ marginBottom: 10 }}>
                Navigate to the explore page to browse avaliable courses
              </Text>
              <Text style={{ fontWeight: 800 }}>Choose a Course</Text>
              <Text style={{ marginBottom: 10 }}>
                Select a course you’re interested in. You can read the course
                description, outline, and reviews to make an informed decision.
              </Text>
              <Text style={{ fontWeight: 800 }}>Enroll</Text>
              <Text style={{ marginBottom: 10 }}>
                Click the <Text style={{ fontWeight: 800 }}>Enroll Now </Text>{" "}
                button. If the course requires payment, follow the prompts to
                complete the transaction.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.helpContent}
            onPress={() => setIsCaret2(!isCaret2)}
          >
            <FontAwesome name="question" size={18} />
            <Text style={styles.helpContentText}>How to access course</Text>
            <FontAwesome
              name={isCaret2 ? "caret-up" : "caret-down"}
              size={18}
            />
          </TouchableOpacity>
          {isCaret2 && (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text style={{ fontWeight: 800 }}>Go to myCourse</Text>
              <Text style={{ marginBottom: 10 }}>
                On the bottom navigation bar, tap on the "My Courses" section.
              </Text>
              <Text style={{ fontWeight: 800 }}>Select your Course</Text>
              <Text style={{ marginBottom: 10 }}>
                Click on the course you want to access.
              </Text>
              <Text style={{ fontWeight: 800 }}>Navigate Course Content</Text>
              <Text style={{ marginBottom: 10 }}>
                Once inside the course, you’ll see the following sections:
              </Text>
              <Text style={{ marginBottom: 10, marginLeft: 10 }}>
                <Text style={{ fontWeight: 800 }}>Lessons: </Text>
                These are divided into topics or chapters.
              </Text>
              <Text style={{ marginBottom: 10, marginLeft: 10 }}>
                <Text style={{ fontWeight: 800 }}>Videos: </Text>
                Watch recorded lessons from instructors.
              </Text>
              <Text style={{ marginBottom: 10, marginLeft: 10 }}>
                <Text style={{ fontWeight: 800 }}>Assignments: </Text>
                Complete these to test your knowledge.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.helpContent}
            onPress={() => setIsCaret3(!isCaret3)}
          >
            <FontAwesome name="question" size={18} />
            <Text style={styles.helpContentText}>
              What to do when the app refuses to refresh
            </Text>
            <FontAwesome
              name={isCaret3 ? "caret-up" : "caret-down"}
              size={18}
            />
          </TouchableOpacity>
          {isCaret3 && (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text style={{ fontWeight: 800 }}>Check Internet Connection</Text>
              <Text style={{ marginBottom: 10 }}>
                Ensure your device is connected to a stable Wi-Fi or mobile data
                network.
              </Text>
              <Text style={{ fontWeight: 800 }}>
                Click on the categories button
              </Text>
              <Text style={{ marginBottom: 10 }}>
                Tap on the Categories Button at the top (e.g all, robotics,
                web...).
              </Text>
              <Text style={{ fontWeight: 800 }}>Close and Reopen the App</Text>
              <Text style={{ marginBottom: 10 }}>
                Exit the app completely and relaunch it. This often fixes minor
                glitches.
              </Text>
              <Text style={{ fontWeight: 800 }}>Update the App</Text>
              <Text style={{ marginBottom: 10 }}>
                Check if a new version of the app is available on the app store.
                An update might fix bugs.
              </Text>
              <Text style={{ fontWeight: 800 }}>Contact Support</Text>
              <Text style={{ marginBottom: 10 }}>
                If the issue persists, reach out to our support team through the
                Help section in the app.
              </Text>
            </View>
          )}
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
    width: 330,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  helpContentText: {
    fontSize: 18,
    fontWeight: 900,
    marginHorizontal: 30,
  },
});
