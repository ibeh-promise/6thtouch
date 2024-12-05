import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useAuth from "@/hooks/useAuth";
import body from "@/constants/Colors";
export default function Page() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    const { resetPassword } = useAuth();
    await resetPassword(newPassword, confirmPassword, setLoading);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.formCta}>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              placeholder="New Password "
              onChangeText={(text) => setNewPassword(text)}
            />
            <FontAwesome
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye" : "eye-slash"}
              color="grey"
              size={18}
              style={styles.eyeIcon}
            />
          </View>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              placeholder="Confirm Password "
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <FontAwesome
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye" : "eye-slash"}
              color="grey"
              size={18}
              style={styles.eyeIcon}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            {loading && <ActivityIndicator />}

            <Text style={styles.loginButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
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
    height: "90%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  formCta: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#E2E2E2",
    padding: 10,
    width: Dimensions.get("window").width - 50,
    height: 54,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "500",
  },
  passwordInput: {
    width: Dimensions.get("window").width - 80,
    borderRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  loginBtn: {
    width: Dimensions.get("window").width - 50,
    backgroundColor: body.dominant,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  loginButtonText: {
    color: "#f2f2f2",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  passwordInputContainer: {
    width: Dimensions.get("window").width - 50,
    backgroundColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
  },
  eyeIcon: {
    backgroundColor: "transparent",
  },
});
