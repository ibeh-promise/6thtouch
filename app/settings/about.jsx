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
import { useState, useEffect, Link } from "react";
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
        <Text style={styles.textTitle}>6thtouch</Text>
        <Text style={{ fontWeight: 600, marginBottom: 10 }}>
          Welcome to 6thtouch, your gateway to mastering technology and
          unlocking your potential in the digital world. At 6thtouch, we
          understand the challenges many face when it comes to accessing quality
          tech education. These include:
        </Text>
        <Text style={{ fontWeight: 500, marginBottom: 10 }}>
          1. Lack of accessible and affordable learning platforms. Difficulty in
          finding structured and practical resources for tech skills.
        </Text>
        <Text style={{ fontWeight: 500, marginBottom: 10 }}>
          2. Limited opportunities for hands-on, project-based learning. Our app
          bridges these gaps by offering an intuitive, comprehensive online
          learning platform designed specifically for tech enthusiasts and
          professionals.
        </Text>
        <Text
          style={{ fontWeight: 800, marginBottom: 10, textAlign: "center" }}
        >
          Our Mission
        </Text>
        <Text style={{ fontWeight: 400, marginBottom: 20 }}>
          {" "}
          Our Mission is To empower individuals with the knowledge and skills
          they need to thrive in today’s tech-driven world.
        </Text>
        <Text style={{ fontWeight: 800, marginBottom: 10 }}>
          Why Choose 6thTouch?
        </Text>
        <Text>
          1. <Text style={{ fontWeight: 700 }}>Tailored Courses:</Text>
          Our lessons are designed to meet the needs of beginners and advanced
          learners alike.
        </Text>
        <Text>
          2.{" "}
          <Text style={{ fontWeight: 800, marginBottom: 20 }}>
            {" "}
            Expert-Led Content:{" "}
          </Text>
          Learn from industry professionals with real-world experience.{" "}
        </Text>
        <Text>
          3.{" "}
          <Text style={{ fontWeight: 800, marginBottom: 20 }}>
            Interactive Learning:
          </Text>
          Engage in hands-on projects and quizzes to reinforce your knowledge.
        </Text>
        <Text>
          4.{" "}
          <Text style={{ fontWeight: 800, marginBottom: 20 }}>
            Flexible Learning:{" "}
          </Text>
          Access courses anytime, anywhere, at your convenience.
        </Text>
        <Text style={{ fontWeight: 800, marginVertical: 10 }}>Join Us</Text>{" "}
        <Text>
          Whether you’re just starting your tech journey or looking to advance
          your skills, 6thTouch is here to guide you every step of the way.
        </Text>
        <Text style={{ fontWeight: 800, marginVertical: 10 }}>Contact Us </Text>
        <Text>if you Have questions or need support? Reach out to us:</Text>
        <Text>
          <Text style={{ fontWeight: 800, marginBottom: 20 }}>Email: </Text>
          6thtouchrobotics@gmail.com{" "}
        </Text>
        <Text>
          <Text style={{ fontWeight: 800, marginBottom: 10 }}>Website: </Text>
          www.6thtouchrobotics.com.ng{" "}
        </Text>
        <Text style={{ fontWeight: 500, marginTop: 10 }}>
          Together, let’s redefine learning and embrace the future of
          technology. Let me know if you’d like to tweak or add anything!
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
});
