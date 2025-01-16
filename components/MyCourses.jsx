import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Progress from "react-native-progress";

export default function MyCourses({ data }) {
  if (!data || data.length === 0) {
    return <Text>No courses available</Text>;
  }

  console.log(
    "data received in my courses",
    data.completedTopics.length,
    data.topics.length
  );

  const progress = data.completedTopics.length / data.topics.length;
  const handleStartLearning = async () => {
    try {
      await AsyncStorage.setItem("title", data.title);
      await AsyncStorage.setItem("id", data.id);
      router.navigate("/coursesOverview/courseView");
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          defaultSource={require("@/assets/images/images_(1).png")}
          source={{ uri: data?.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.courseDetails}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: body.textDark }}>
            {data?.title}
          </Text>

          {data.completedTopics.length != 0 && (
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>
                {Math.round(progress * 100)}%
              </Text>
              <Progress.Bar
                progress={progress}
                width={Dimensions.get("window").width - 100}
                color={body.recessive}
                style={{ backgroundColor: "#e2e2e2", border: "none" }}
                height={20}
                borderWidth={0}
                borderRadius={0}
              />
            </View>
          )}
          {data.completedTopics.length == 0 ? (
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.button1}
                onPress={handleStartLearning}
              >
                <Text style={{ color: "white", fontWeight: "700" }}>
                  Start learning
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.button1}
                onPress={handleStartLearning}
              >
                <Text style={{ color: "white", fontWeight: "700" }}>
                  Continue learning
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 20,
  },
  container2: {
    backgroundColor: body.tertiary,
    borderRadius: 5,
  },
  thumbnail: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    borderColor: body.dominant,
  },
  courseDetails: {
    padding: 30,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button1: {
    backgroundColor: body.recessive,
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 5,
  },
  progressContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  progressText: {
    width: "100%",
    fontSize: 16,
    textAlign: "left",
    marginBottom: 5,
  },
});
