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
        <Text style={styles.textTitle}>Introduction to 6thtouch</Text>

        <Text style={{ fontWeight: 500, marginVertical: 20 }}>
          Welcome to 6thTouch, your ultimate gateway to mastering coding and
          robotics! This app is designed to revolutionize how you learn tech
          skills by providing a hands-on, interactive, and engaging learning
          experience tailored to your needs. With 6thTouch, you’ll have access
          to expertly curated courses, practical coding challenges, and
          step-by-step robotics projects that empower you to build, innovate,
          and excel in the tech-driven world. Whether you’re a beginner taking
          your first steps or an advanced learner looking to sharpen your
          skills, this app provides all the tools and guidance you need.
        </Text>
        <Text style={styles.textTitle}>How it benefits you</Text>
        <Text style={styles.textBody}>
          1. <Text style={{ fontWeight: 800 }}>Learn by Doing:</Text>{" "}
          Interactive lessons and projects allow you to apply what you’ve
          learned in real-world scenarios.
        </Text>
        <Text style={styles.textBody}>
          2. <Text style={{ fontWeight: 800 }}>Stay Future-Ready:</Text> Gain
          cutting-edge skills in coding and robotics to thrive in today’s
          tech-centric environment.
        </Text>
        <Text>
          3. <Text style={{ fontWeight: 800 }}>Personalized Learning:</Text>{" "}
          Flexible course structures and progress tracking ensure you learn at
          your own pace.
        </Text>
        <Text style={styles.textBody}>
          4. <Text style={{ fontWeight: 800 }}>Community Support:</Text> Connect
          with like-minded learners and experts to collaborate, share ideas, and
          grow together.{" "}
        </Text>
        <Text style={styles.textBody}>
          Get ready to embark on an exciting journey where creativity meets
          technology. With 6thTouch, the possibilities are endless! 🚀
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
