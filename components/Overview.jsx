import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import body from "@/constants/Colors";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Video } from "expo-av";

export default function Overview({ setDisplayOverview }) {
  const handleBack = () => setDisplayOverview(false);

  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <FontAwesome5 name="arrow-left" color={body.tertiary} size={17} />
          </TouchableOpacity>
          <Text style={styles.text}>LEGO MINDSTORM EV3</Text>
        </View>
        <Video
          source={require("@/assets/video/MCR-LV-4-4-RobotArmH25.webm")}
          style={styles.video}
          resizeMode="contain"
          useNativeControls
          onLoadStart={() => console.log("Loading video...")}
          onLoad={() => console.log("Video loaded successfully")}
          onError={(error) => console.log("Video error:", error)}
        />
        <View style={styles.OverviewContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Introduction</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Overview of the course</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Writing your first program</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Building a simple robot</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Programming environment</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>First Project</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Robotics Kit Box</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Data logging</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color={body.tertiary}
              size={20}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.enrollText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: body.dominant,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: body.tertiary,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "800",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  video: {
    width: "100%",
    height: 300,
  },
  OverviewContainer: {
    backgroundColor: body.complementary,
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  contentText: {
    color: body.tertiary,
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    padding: 15,
    width: "100%",
    backgroundColor: body.dominant2,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  enrollText: {
    color: body.tertiary,
    fontSize: 15,
    fontWeight: "800",
  },
});
