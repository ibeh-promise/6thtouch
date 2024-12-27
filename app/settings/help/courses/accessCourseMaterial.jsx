import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.textTitle}>Accessing Course Materials</Text>
          <Text style={{ fontWeight: 500, marginVertical: 20 }}>
            6thTouch makes learning easy and interactive by providing a variety
            of course materials, including videos, downloadable resources, video
            quizzes, and video assignments. Here's a step-by-step guide to
            accessing and utilizing these materials effectively.
          </Text>
          <Text style={styles.textTitle}>
            A Guild to Access Course Materials
          </Text>

          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            Open Your Enrolled Course
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Tap the courses icon in the bottom navigation bar.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Click on <Text style={{ fontWeight: 800 }}>start learning </Text>
            button to open the learning environment
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - You’ll be directed to the Course learning environment, where you
            can see the course structure, including lessons.
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>Viewing Videos</Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Immediately the course learning environment is loaded you will
            have access to the course.
          </Text>
          <Text style={{ fontWeight: 800, marginLeft: 10 }}>
            The video player will open, allowing you to:
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - <Text style={{ fontWeight: 800 }}>Play / Pause: </Text> Start or
            stop the video
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - <Text style={{ fontWeight: 800 }}>Full Screen: </Text> Tap the
            full-screen icon for an immersive view.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - <Text style={{ fontWeight: 800 }}>Rewind / Forward: </Text> Skip
            backward or forward using the controls.
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>Text To Speech</Text>
          <Text style={{ marginLeft: 10 }}>
            - <Text style={{ fontWeight: 800 }}>Play: </Text> Tap on the
            <Text style={{ fontWeight: 800 }}> Audio</Text> icon to play to talk
          </Text>
          <Text style={{ marginLeft: 10 }}>
            - <Text style={{ fontWeight: 800 }}>Stop: </Text> Tap on the
            <Text style={{ fontWeight: 800 }}> Stop</Text> icon to stop tostop
            talking
          </Text>

          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            Downloading Resourses
          </Text>
          <Text style={{ marginLeft: 10 }}>
            - Tap on the download icon to download the file to your device.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Access the downloaded files anytime on your device
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            Completing Assignments
          </Text>
          <Text style={{ marginLeft: 10 }}>
            - Open a lesson with an assignment
          </Text>

          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Review the instructions, objectives, and submission requirements.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Complete the task as per the guidelines.
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
