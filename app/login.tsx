import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
export default function Page() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={{ width: 130, height: 130 }}
        />
        <Text style={styles.text}>6thtouch</Text>
        <Text style={styles.textWelcome}>Welcome back! Continue learning</Text>
        <View
          style={{
            width: "100%",
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput style={styles.input} placeholder="Email id" />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              placeholder="Password "
            />
            <FontAwesome
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye" : "eye-slash"}
              color="grey"
              size={18}
              style={styles.eyeIcon}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 15,
            }}
          >
            <Text>Don't have an account?, </Text>
            <Text
              style={{ color: "#586FBD" }}
              onPress={() => router.navigate("/signup")}
            >
              Signup
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#586FBD",
    fontSize: 24,
    fontWeight: "bold",
  },
  textWelcome: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    width: 320,
    borderRadius: 5,
    marginTop: 20,
  },
  passwordInput: {
    width: 295,
    borderRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
  },
  loginBtn: {
    width: 320,
    backgroundColor: "#586FBD",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#f2f2f2",
    textAlign: "center",
  },
  passwordInputContainer: {
    width: 320,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  eyeIcon: {
    backgroundColor: "transparent",
  },
});
