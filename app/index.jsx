import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import useAuth from "@/hooks/useAuth";
import body from "@/constants/Colors";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    const { login } = useAuth();
    await login(email, password, setLoading);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>6THTOUCH</Text>
      <Text style={styles.textWelcome}>Welcome back! Continue learning</Text>

      <View style={styles.container2}>
        {loading && <Modal transparent={true} />}

        <Text style={styles.login}>Login</Text>
        <View
          style={{
            width: "100%",
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              placeholder="Password "
              onChangeText={(text) => setPassword(text)}
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

            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              alignItems: "flex-start",
              paddingHorizontal: 30,
              paddingTop: 15,
            }}
          >
            <Text
              style={{ color: "#586FBD", fontSize: 17 }}
              onPress={() => router.navigate("/settings/otp/forgetPassword")}
            >
              Forget Password
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 15,
            }}
          >
            <Text
              style={{ fontSize: 20, color: body.textDark }}
              onPress={() => router.navigate("/explore")}
            >
              Don't have an account?,{" "}
            </Text>
            <Text
              style={{ color: "#586FBD", fontSize: 20 }}
              onPress={() => router.navigate("/register")}
            >
              Register
            </Text>
          </View>
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
    paddingTop: 50,
    overflow: "scroll",
  },
  container2: {
    backgroundColor: body.tertiary,
    width: "100%",
    height: "90%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "scroll",
  },
  text: {
    textAlign: "center",
    color: "#F2F2F2",
    fontSize: 30,
    fontWeight: "900",
  },
  login: {
    textAlign: "left",
    margin: 30,
    marginBottom: 50,
    fontSize: 30,
    fontWeight: "900",
    color: body.dominant,
  },
  textWelcome: {
    textAlign: "center",
    color: "#f2f2f2",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 30,
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
    paddingVertical: 15,
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
