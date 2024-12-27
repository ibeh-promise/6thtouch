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
          <Text style={styles.textTitle}>Enroll In A Course</Text>
          <Text style={{ fontWeight: 500, marginVertical: 20 }}>
            Ready to start learning various courses? Enrolling in a course on
            6thTouch is quick and straightforward. Follow this guide to find the
            right course and begin your learning journey.
          </Text>
          <Text style={styles.textTitle}>
            Step-by-Step Guide to Enroll in a Course
          </Text>

          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            1. Open the App
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            Launch the 6thTouch app on your device and log in to your account.
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            2. explore Courses
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Automatically, course will all avaliable courses will be shown at
            the explore page
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Tap on the <Text>Enroll Now</Text> button of any course of your
            choice to see course overview
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            3. Search Courses
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Use the Search Bar at the top of the screen to find specific
            courses by topic, language, or difficulty level.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Filter courses by category (e.g., Python, Robotics, Web
            Development) or by your skill level (Beginner, Intermediate,
            Advanced).
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            4. View Course Details
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Tap on a the <Text>Read More</Text> to open its Course Details.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Review the description, learning objectives, syllabus,
            prerequisites, and estimated duration.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Check user reviews and ratings from other learners.
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            5. Enroll in the Course
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Tap on the <Text>Enroll Now</Text> button of any course of your
            choice to see course overview
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - If the course is free, it will be added to your dashboard
            immediately.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - For paid courses, you will be prompted to complete the payment
            process.
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            6. Start Learning
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Once enrolled, the course will appear in your Dashboard in the
            "MyCourses" page.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Tap on "Start Learning" button of the course to begin learning
            with videos, quizzes, and projects.
          </Text>
          <Text style={{ fontWeight: 800, marginTop: 20 }}>
            6. Tips for choosing the right course
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Ensure you meet the course requirements before enrolling.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Begin with shorter courses if you’re new to it.
          </Text>
          <Text style={{ fontWeight: "500", marginTop: 10 }}>
            With 6thTouch, enrolling in courses is effortless, and each course
            is designed to help you master skills step by step. Dive into
            learning and watch your knowledge grow!.
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
