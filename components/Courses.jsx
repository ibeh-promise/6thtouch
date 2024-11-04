import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import Overview from "@/components/Overview";

export default function Courses({ displayOverview, setDisplayOverview }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require("@/assets/images/teacher-preparation-slide-2.png")}
          style={styles.thumbnail}
        />
        <View style={styles.courseDetails}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>
            LEGO MINDSTORM EV3
          </Text>
          <View style={styles.detailContent}>
            <Text>November 3, 2024</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="heart" color={body.recessive} />
              <Text style={{ marginLeft: 5 }}>210</Text>
            </View>
          </View>
          <View style={styles.detailContent}>
            <Text>Duration</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: 700 }}>1 month</Text>
            </View>
          </View>
          <View style={styles.detailContent}>
            <Text>Students</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: 700 }}>+270</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDisplayOverview(true)}
          >
            <Text style={{ color: "white", fontWeight: 700 }}>Enroll Now</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: body.recessive, fontWeight: 700 }}>
              Read More
            </Text>
          </TouchableOpacity>
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
    height: 400,
    padding: 15,
  },
  thumbnail: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: body.dominant,
  },
  courseDetails: {
    paddingVertical: 10,
  },
  detailContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingVertical: 10,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: body.recessive,
    width: 130,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});
