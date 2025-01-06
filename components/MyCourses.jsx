import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyCourses({ data, data2 }) {
  if (!data || data.length === 0) {
    return <Text>No courses available</Text>;
  }

  console.log("data received in my courses", data[0]);

  const handleStartLearning = async () => {
    try {
      await AsyncStorage.setItem("title", data[0].title);
      await AsyncStorage.setItem("id", data[0].id);
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
          source={{ uri: data[0]?.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.courseDetails}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: body.textDark }}>
            {data[0]?.title}
          </Text>

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
    marginTop: 20,
  },
  button1: {
    backgroundColor: body.recessive,
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 5,
  },
});
