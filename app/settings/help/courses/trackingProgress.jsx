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
          <Text style={styles.textTitle}>Tracking Your Progress</Text>
          <Text style={{ fontWeight: 500, marginVertical: 20 }}>
            Keeping track of your Progress is an essential part of the learning
            experience. 6thTouch provides powerful tools to monitor your
            completed lessons helping you stay motivated and measure your
            growth.
          </Text>

          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            Open Your Enrolled Course
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - Tap the courses icon in the bottom navigation bar.
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            - above the <Text style={{ fontWeight: 800 }}>start learning </Text>
            button you will see a progression bar
          </Text>

          <Text style={{ fontWeight: 800, marginTop: 10 }}>
            Understanding the progression bar
          </Text>
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            The progression bar is a percentage of the topics you have treated
            under that course
          </Text>
          <Text style={{ marginLeft: 10 }}>
            it is accurately measured in percentages
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
