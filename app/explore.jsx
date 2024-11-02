import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Footer from "@/components/Footer";

export default function Page() {
  const [isActive, setIsActive] = useState("all");
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.categories}>
          <View style={styles.categoriesAlignment}>
            <TouchableOpacity
              onPress={() => setIsActive("all")}
              style={[
                isActive == "all" && styles.active,
                styles.categoriesContent,
              ]}
            >
              <FontAwesome6 name="earth-africa" size={20} />
              <Text style={isActive == "all" ? styles.textActive : null}>
                {" "}
                All Categories
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsActive("webd")}
              style={[
                isActive == "webd" && styles.active,
                styles.categoriesContent,
              ]}
            >
              <FontAwesome5 name="robot" size={20} />
              <Text> Robotics</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoriesAlignment}>
            <TouchableOpacity style={styles.categoriesContent}>
              <FontAwesome5 name="laptop-code" size={20} />
              <Text> Web Development</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoriesContent}>
              <FontAwesome5 name="laptop-code" size={20} />
              <Text> Product Designing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: body.tertiary,
  },
  topContainer: {
    flex: 1,

    backgroundColor: body.darkDominant2,
  },
  categories: {
    width: "100%",
    backgroundColor: body.tertiary,
    height: 150,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  categoriesContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoriesAlignment: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  active: {
    backgroundColor: body.reccessive,
    padding: 5,
    borderRadius: 5,
  },
  textActive: {
    color: body.tertiary,
  },
});
