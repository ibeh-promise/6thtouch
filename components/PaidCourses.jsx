import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import useAuth from "@/hooks/useAuth";
import { router } from "expo-router";

export default function PaidCourses({
  data,
  displayOverview,
  setDisplayOverview,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          defaultSource={require("@/assets/images/images_(1).png")}
          source={{ uri: data.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.courseDetails}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: body.textDark }}>
            {data.title}
          </Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                router.navigate("/coursesOverview/coursesView");
              }}
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
