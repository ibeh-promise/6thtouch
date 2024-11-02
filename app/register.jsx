import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Alert,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import body from "../constants/Colors";
import useAuth from "../hooks/useAuth";
export default function Page() {
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const { signup, error, response } = useAuth();

  const handleSubmit = async () => {
    await signup(
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      setLoading
    );
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Signup Error", error);
    }
  }, [error]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>6THTOUCH</Text>
      <Text style={styles.textWelcome}>Welcome! Start learning</Text>

      <View style={styles.container2}>
        <Text style={styles.login}>Register</Text>
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
            placeholder="Firstname"
            onChangeText={(text) => setFirstname(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Lastname"
            onChangeText={(text) => setLastname(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
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
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              placeholder="Confirm password "
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
          <TouchableOpacity style={styles.loginBtn}>
            <Text
              style={styles.loginButtonText}
              onPress={handleSubmit}
              disabled={true}
            >
              Register
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 15,
            }}
          >
            <Text style={{ fontSize: 20 }}>Already have an account?, </Text>
            <Text
              style={{ color: "#586FBD", fontSize: 20 }}
              onPress={() => router.back()}
            >
              Login
            </Text>
            {loading && <ActivityIndicator />}
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
  },
  container2: {
    backgroundColor: body.tertiary,
    width: "100%",
    height: "90%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    textAlign: "center",
    color: "#f2f2f2",
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
    marginBottom: 30,
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
    marginBottom: 20,
    height: 54,
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
    marginBottom: 30,
    borderRadius: 10,
  },
  eyeIcon: {
    backgroundColor: "transparent",
  },
});
