import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useAuth from "@/hooks/useAuth";

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.profileContent}
          onPress={() => router.navigate("/settings/changePassword")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 125,
            }}
          >
            <FontAwesome6
              name="key"
              style={{ color: body.textDark }}
              size={15}
            />
            <Text style={styles.profileContentText}> Change Password</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            style={{ color: body.textDark }}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileContent}
          onPress={() => router.navigate("/settings/otp/forgetPassword")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 130,
            }}
          >
            <FontAwesome6
              name="question"
              style={{ color: body.textDark }}
              size={20}
            />
            <Text style={styles.profileContentText}> Forgot Password</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            style={{ color: body.textDark }}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: body.dominant,
    color: "white",
  },
  profileContent: {
    width: "100%",
    backgroundColor: body.tertiary,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  profileContentText: {
    fontSize: 16,
    fontWeight: "800",
    color: body.textDark,
  },
});
