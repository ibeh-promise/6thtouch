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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useAuth from "@/hooks/useAuth";
import body from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textTitle}>How Can We Help?</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Search Help Center "
          />
          <FontAwesome
            name={"search"}
            color="black"
            size={18}
            style={styles.eyeIcon}
          />
        </View>
        <Text style={{ fontWeight: 800, marginBottom: 20 }}>Help Topics</Text>
        <TouchableOpacity style={styles.helpContent}>
          <FontAwesome name="flag" size={18} />
          <Text style={styles.helpContentText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpContent}>
          <FontAwesome name="laptop" size={18} />
          <Text style={styles.helpContentText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpContent}>
          <FontAwesome name="credit-card-alt" size={18} />
          <Text style={styles.helpContentText}>Payment</Text>
        </TouchableOpacity>
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
    width: 200,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  helpContentText: {
    fontSize: 18,
    fontWeight: 900,
    marginLeft: 30,
  },
});
