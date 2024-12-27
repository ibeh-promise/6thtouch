import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import useAuth from "@/hooks/useAuth";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Courses({ data, displayOverview, setDisplayOverview }) {
  const [isDiscriptionOpen, setIsDiscriptionOpen] = useState(false);
  const handleEnroll = async () => {
    try {
      await AsyncStorage.setItem("id", data.id);
      console.log(data.id);
      router.navigate("/coursesOverview/overview");
    } catch (error) {
      throw error;
    }
  };
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
          <View style={styles.detailContent}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="eye" size={16} color={body.textDark} />
              <Text
                style={{
                  marginLeft: 5,
                  color: body.textDark,
                  fontWeight: "900",
                }}
              >
                Reviews
              </Text>
            </View>
            <Text style={{ marginLeft: 5, color: body.textDark }}>
              {data.reviews}
            </Text>
          </View>
          <View style={styles.detailContent}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="access-time"
                size={16}
                color={body.textDark}
              />
              <Text
                style={{
                  marginLeft: 5,
                  color: body.textDark,
                  fontWeight: "900",
                }}
              >
                Duration
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: body.textDark }}>{data.duration}</Text>
            </View>
          </View>
          <View style={styles.detailContent}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="groups" size={16} color={body.textDark} />
              <Text
                style={{
                  marginLeft: 5,
                  color: body.textDark,
                  fontWeight: "900",
                }}
              >
                Students
              </Text>
            </View>

            <Text style={{ color: body.textDark }}>
              {data.subscribers.length}
            </Text>
          </View>
          {isDiscriptionOpen && (
            <Text style={{ color: body.textDark }}>{data.description}</Text>
          )}
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button1} onPress={handleEnroll}>
              <Text style={{ color: "white", fontWeight: "700" }}>
                Enroll Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => setIsDiscriptionOpen(!isDiscriptionOpen)}
            >
              <Text style={{ color: body.recessive, fontWeight: "700" }}>
                {isDiscriptionOpen ? "Read less" : "Read More"}
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
  detailContent: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingTop: 10,
    paddingHorizontal: 0,
    marginBottom: 10,
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
  button2: {
    color: body.recessive,
    fontWeight: "700",
    borderWidth: 1,
    borderColor: body.recessive,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
